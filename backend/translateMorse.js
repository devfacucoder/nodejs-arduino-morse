const codMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": " ",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
};

const translateMorse = (text) => {
  text = text.toUpperCase(); // reasignar
  const morseArray = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const val = codMorse[char];

    if (val) {
      morseArray.push(val);
    } else {
      morseArray.push("?"); // opcional: para caracteres desconocidos
    }
  }

  return morseArray.join(" "); // juntar con espacio
};
export default translateMorse
