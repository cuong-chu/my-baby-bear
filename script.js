const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const music = document.getElementById('bg-music');
const btn = document.getElementById('music-control');
const icon = document.getElementById('music-icon');

btn.addEventListener('click', function() {
    if (music.paused) {
        music.play();
        btn.classList.add('playing');
        icon.innerText = '⏸️'; // Change the icon to "pause"
    } else {
        music.pause();
        btn.classList.remove('playing');
        icon.innerText = '🎵'; // Change the icon to "music note"
    }
});

let noScale = 1;      // Reduce the "NO" button
let yesScale = 1;     // Enlarge the "YES" button
let clickCount = 0;

const messages = [
  "Are you sure? 🥺",
  "Think again 😢",
  "It will make me sad 💔",
  "Really really sure? 😭",
  "Okay… last chance 😞"
];

noBtn.addEventListener("click", () => {
  clickCount++;

  // Message shown up
  if (clickCount <= messages.length) {
    message.textContent = messages[clickCount - 1];
  } else {
    message.textContent = "You can't escape 😈";
  }

  // Reduce the "NO" button
  noScale -= 0.15;
  if (noScale < 0.3) noScale = 0.3; // Scale speed
  noBtn.style.transform = `scale(${noScale})`;

  // Enlarge the "YES" button
  yesScale += 0.2;
  yesBtn.style.transform = `scale(${yesScale})`;
});

yesBtn.addEventListener("click", () => {

  const container = document.querySelector('.container');
  container.innerHTML = `
    <h1 style="color:#ff4d88;">Yay 💖 I knew it!!!</h1>
    <p style="font-size: 20px;">The best choice in your life!!! 🌹</p>
    <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnhkNXVwNzZscW9mczZhbGt6N3N3cmwyaGZoaXVlY3pwajVhMTU3aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Rp2hwwCjYFRaO9ZAts/giphy.gif" width="200">
  `;
});