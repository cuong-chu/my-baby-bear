const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

let scale = 1;       // kích thước ban đầu
let clickCount = 0;  // đếm số lần bấm NO

const messages = [
  "Are you sure? 🥺",
  "Think again 😢",
  "It will make me sad 💔",
  "Really really sure? 😭",
  "Okay… last chance 😞"
];

noBtn.addEventListener("click", () => {
  clickCount++;

  // hiện thông báo
  if (clickCount <= messages.length) {
    message.textContent = messages[clickCount - 1];
  } else {
    message.textContent = "You can't escape 😈";
  }

  // thu nhỏ nút NO
  scale -= 0.15;
  if (scale < 0.1) scale = 0.1;
  noBtn.style.transform = `scale(${scale})`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <h1 style="color:#ff4d88; margin-top:100px;">
      Yayyy 💖 I knew it!!!
      The best choice in your life!!!
    </h1>
  `;
});