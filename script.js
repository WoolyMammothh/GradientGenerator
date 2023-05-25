const gradientBox = document.querySelector(".gradient-box");
const colourInputs = document.querySelectorAll(".colours input");
const selectMenu = document.querySelector(".select-box select")
const textarea = document.querySelector("textarea");
const randomiseBtn = document.querySelector(".randomise");
const copyBtn = document.querySelector(".copy");
const txt = document.querySelector(".column p");
const ctxt = document.querySelector(".colours p");
const selectCon = document.querySelector(".select-box");
const body = document.querySelector("body");

const getRandomColour = () => {
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomHex}`;
}

const createGradient = (isRandom) => {
  if (isRandom) {
    colourInputs[0].value = getRandomColour();
    colourInputs[1].value = getRandomColour();
  }
  //change colour value for each input
  const gradient = `linear-gradient(${selectMenu.value}, ${colourInputs[0].value}, ${colourInputs[1].value})`;
  gradientBox.style.background = gradient;
  textarea.innerHTML = gradient;
  body.style.background = gradient;
  setStyle();
}

colourInputs.forEach(input => {
  //calls generateGradient() on each input made in the colour input.
  input.addEventListener("input", () => createGradient(false));
});

const copyGradient = () => {
  navigator.clipboard.writeText(textarea.value);
  copyBtn.innerText = "Copied!";
  setTimeout(() => copyGradient.innerText = "Copy Gradient", 4);
}

const setStyle = () => {
  textarea.style.color = colourInputs[0].value;
  textarea.style.border = `1px solid ${colourInputs[0].value}`;
  randomiseBtn.style.background = colourInputs[0].value;
  copyBtn.style.border = `1px solid ${colourInputs[0].value}`;
  copyBtn.style.color =  colourInputs[0].value;
  txt.style.color = colourInputs[0].value;
  ctxt.style.color = colourInputs[0].value;
  selectCon.style.border = `1px solid ${colourInputs[0].value}`;
  selectMenu.style.color = colourInputs[0].value;
  body.style.background = gradient;
}

selectMenu.addEventListener("change", () => createGradient(false));
randomiseBtn.addEventListener("click", ()  => createGradient(true));  
copyBtn.addEventListener("click", copyGradient);