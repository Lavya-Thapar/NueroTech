// CURSOR
// cursor movement per key press
const cursor_speed = 10;
class Cursor {
  constructor() {
    this.element = document.getElementById("cursor");
    this.element.style.top = `${window.innerHeight * (11 / 16)}px`;
    this.element.style.left = `${window.innerWidth / 2}px`;
  }
  moveDown() {
    this.element.style.top = `${
      Number.parseFloat(this.element.style.top.slice(0, -2)) + cursor_speed
    }px`;
  }
  moveLeft() {
    this.element.style.left = `${
      Number.parseFloat(this.element.style.left.slice(0, -2)) - cursor_speed
    }px`;
  }
  moveRight() {
    this.element.style.left = `${
      Number.parseFloat(this.element.style.left.slice(0, -2)) + cursor_speed
    }px`;
  }
  moveUp() {
    this.element.style.top = `${
      Number.parseFloat(this.element.style.top.slice(0, -2)) - cursor_speed
    }px`;
  }
}

const cursor = new Cursor();
const l_c = document.getElementById("left");
const u_c = document.getElementById("up");
const d_c = document.getElementById("down");
const r_c = document.getElementById("right");

l_c.addEventListener("click", () => cursor.moveLeft());
u_c.addEventListener("click", () => cursor.moveUp());
d_c.addEventListener("click", () => cursor.moveDown());
r_c.addEventListener("click", () => cursor.moveRight());

// KEYBOARD

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
      return document.getElementsByClassName(cls)[0];
    });
  }

  displayKeys() {
    for (const key of this.keys) {
      console.log(key);
    }
  }

  pollCursorLocation(cursor) {
    for (const key of this.keys) {
      if (key == undefined) continue;
      const rect = key.getBoundingClientRect();

      const c_t = Number.parseFloat(cursor.style.top.slice(0, -2));
      const c_l = Number.parseFloat(cursor.style.left.slice(0, -2));

      if (
        c_l >= rect.left &&
        c_l <= rect.left + rect.width &&
        c_t >= rect.top &&
        c_t <= rect.top + rect.height
      ) {
        // it means cursor is over the key
        key.style.backgroundColor = "red";
      } else {
        key.style.backgroundColor = "white";
      }
    }
  }
}

const kb = new Keyboard();
setInterval(() => {
  kb.pollCursorLocation(cursor.element);
}, 500);
