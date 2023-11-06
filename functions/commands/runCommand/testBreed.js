import { randomIntMinToMax } from "../../../utils.js"

export const testBreed = (msg) => {
  const partialMsg = msg.split('stinky testbreed ')[1]
  const hex1 = hex_to_RGB(partialMsg.split(' ')[0])
  const hex2 = hex_to_RGB(partialMsg.split(' ')[1])

  // normalise
  const lowerRGB = {
    r: hex1.r < hex2.r ? hex1.r : hex2.r,
    g: hex1.g < hex2.g ? hex1.g : hex2.g,
    b: hex1.b < hex2.b ? hex1.b : hex2.b,
  }
  const higherRGB = {
    r: hex1.r > hex2.r ? hex1.r : hex2.r,
    g: hex1.g > hex2.g ? hex1.g : hex2.g,
    b: hex1.b > hex2.b ? hex1.b : hex2.b,
  }

  // get a % number to displace
  const displace = randomIntMinToMax(1, 100)/100

  const differences = {
    r: higherRGB.r - lowerRGB.r,
    g: higherRGB.g - lowerRGB.g,
    b: higherRGB.b - lowerRGB.b,
  }

  const displaced = {
    r: lowerRGB.r + Math.floor(differences.r * displace),
    g: lowerRGB.g + Math.floor(differences.g * displace),
    b: lowerRGB.b + Math.floor(differences.b * displace),
  }

  const plusOrMinus = {
    r: randomIntMinToMax(1, 2),
    g: randomIntMinToMax(1, 2),
    b: randomIntMinToMax(1, 2),
  }

  const toShuffle = {
    r: randomIntMinToMax(1, 20),
    g: randomIntMinToMax(1, 20),
    b: randomIntMinToMax(1, 20),
  }

  const shuffled = {
    r: plusOrMinus.r === 2 ? displaced.r + toShuffle.r : displaced.r - toShuffle.r,
    g: plusOrMinus.g === 2 ? displaced.g + toShuffle.g : displaced.g - toShuffle.g,
    b: plusOrMinus.b === 2 ? displaced.b + toShuffle.b : displaced.b - toShuffle.b,
  }

  // make sure
  if (shuffled.r < lowerRGB.r) {
    shuffled.r = lowerRGB.r
  }
  if (shuffled.r > higherRGB.r) {
    shuffled.r = higherRGB.r
  }

  if (shuffled.g < lowerRGB.g) {
    shuffled.g = lowerRGB.g
  }
  if (shuffled.g > higherRGB.g) {
    shuffled.g = higherRGB.g
  }

  if (shuffled.b < lowerRGB.b) {
    shuffled.b = lowerRGB.b
  }
  if (shuffled.b > higherRGB.b) {
    shuffled.b = higherRGB.b
  }

  return rgbToHex(shuffled.r, shuffled.g, shuffled.b).toUpperCase()
}

function hex_to_RGB(hex) {
  console.log(hex)
  var m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
  return {
      r: parseInt(m[1], 16),
      g: parseInt(m[2], 16),
      b: parseInt(m[3], 16)
  };
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}