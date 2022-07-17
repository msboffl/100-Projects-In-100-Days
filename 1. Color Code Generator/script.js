const generateColorBtn = document.getElementById("generate");
const rgb = document.getElementById("rgb");
const hex = document.getElementById("hex");
const hsl = document.getElementById("hsl");

//  Generate Random Integer b/w 0 to 255
function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Generate RGB Color Code
function randomRGBColor() {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);

  let rgbCode = [r, g, b];

  rgb.innerText = "RGB CODE : " + "(" + rgbCode + ")";
  return [r, g, b];
}

// Convert RGB to HEX
function randomHEXColor() {
  let [r, g, b] = randomRGBColor();
  let hr = r.toString(16).padStart(2, "0");
  let hg = g.toString(16).padStart(2, "0");
  let hb = b.toString(16).padStart(2, "0");

  hex.innerText = "HEX CODE : " + "#" + hr + hg + hb;
  return "#" + hr + hg + hb;
}


// Background colour change event
function changeBGColor() {
  let hexCode = randomHEXColor();
  document.body.style.backgroundColor = hexCode;
}

generateColorBtn.addEventListener("click", changeBGColor);
