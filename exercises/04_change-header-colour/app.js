window.onload = changeHeader;

function changeHeader() {
  const header = document.getElementById("header");
  const backgroundColour = randomHexColour();
  const foregroundColour = randomHexColour();
  header.style.backgroundColor = backgroundColour; 
  header.style.color = foregroundColour;
  console.log({ backgroundColour, foregroundColour });
}

function randomHexColour() {
  const validValues = "123456ABCDEF";
  let output = "";
  for (let i = 0; i <= 5; i++) {
    const idx = rng(0, validValues.length - 1);
    output+=validValues[idx];
  }
  return `#${output}`;
}

const rng = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

