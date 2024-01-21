class Keyboard {
  keys_by_classes = [
    "tilde",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "zero",
    "minus",
    "equals",
    "backspace",
    "tab",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "leftc",
    "rightc",
    "backslash",
    "capslock",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "semi",
    "quote",
    "enter",
    "lshift",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    "comma",
    "dot",
    "slash",
    "uparr",
    "lctrl",
    "lalt",
    "space",
    "rctrl",
    "ralt",
    "leftarr",
    "downarr",
    "rightarr",
  ];
  constructor() {
    this.keys = this.keys_by_classes.map((cls) => {
      return document.getElementsByClassName(`.${cls}`)[0];
    });
  }

  displayKeys() {
    // TODO: keys are yet undefined
    for (const key of this.keys) {
      console.log(key);
    }
  }
}

kb = new Keyboard();
kb.displayKeys();
