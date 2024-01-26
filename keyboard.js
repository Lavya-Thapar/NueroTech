// CURSOR
// cursor movement per key press
const CURSOR_SPEED_Y = 40;

// run key detection loop after how many milliseconds
const POLL_TIMER = 500;

// Colors of keys on hover
const HOVER_KEY_COLOR = "#1199ff";

// global variable which stores whether shift is pressed
let shiftIsPressed = false;
let isCapsPressed = false;
class Cursor {
  constructor() {
    this.element = document.getElementById("cursor");
    this.speedX = document.getElementsByClassName("six")[0].clientWidth + 10;
    this.element.style.top = `${window.innerHeight * (3 / 4)}px`;
    this.element.style.left = `${
      window.innerWidth / 2 + this.element.clientWidth / 2
    }px`;
  }
  moveDown() {
    let new_y =
      Number.parseFloat(this.element.style.top.slice(0, -2)) + CURSOR_SPEED_Y;
    const kb = document
      .getElementsByClassName("keyboard")[0]
      .getBoundingClientRect();
    if (new_y > kb.bottom) {
      return;
    }
    this.element.style.top = `${new_y}px`;
  }
  moveLeft() {
    let new_x =
      Number.parseFloat(this.element.style.left.slice(0, -2)) - this.speedX;
    const kb = document
      .getElementsByClassName("keyboard")[0]
      .getBoundingClientRect();
    if (new_x < kb.left) {
      return;
    }
    this.element.style.left = `${new_x}px`;
  }
  moveRight() {
    let new_x =
      Number.parseFloat(this.element.style.left.slice(0, -2)) + this.speedX;
    const kb = document
      .getElementsByClassName("keyboard")[0]
      .getBoundingClientRect();
    if (new_x > kb.right) {
      return;
    }
    this.element.style.left = `${new_x}px`;
  }
  moveUp() {
    let new_y =
      Number.parseFloat(this.element.style.top.slice(0, -2)) - CURSOR_SPEED_Y;
    const kb = document
      .getElementsByClassName("keyboard")[0]
      .getBoundingClientRect();
    if (new_y < kb.top) {
      return;
    }
    this.element.style.top = `${new_y}px`;
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
    "backspace",
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
    "extras",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "at",
    "world",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    "comma",
    "dot",
    "com",
    "shift",
    "settings",
    "space long-key",
    "medium-key",
    "leftarr",
    "rightarr",
  ];
  constructor() {
    this.keys = this.keys_by_classes.map((cls) => {
      return document.getElementsByClassName(cls)[0];
    });
    this.element = document.getElementsByClassName("keyboard")[0];
  }

  /* callback is a function which takes
  key as the first parameter and boolean as second
  -> boolean determines if cursor is over key or not
   */
  cursorOverKey(cursor, callback) {
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
        callback(key, true);
      } else {
        callback(key, false);
      }
    }
  }

  pollCursorLocation(cursor) {
    function setKeyHoverState(key, isHover) {
      if (isHover) {
        key.style.backgroundColor = HOVER_KEY_COLOR;
        key.style.color = "white";
      } else {
        key.style.backgroundColor = "white";
        key.style.color = "black";
      }
    }

    setInterval(() => {
      this.cursorOverKey(cursor, setKeyHoverState);
      // highlight keys with extra state
      if (shiftIsPressed) {
        this.keys[this.keys_by_classes.indexOf("shift")].style.backgroundColor =
          "yellow";
        this.keys[this.keys_by_classes.indexOf("shift")].style.color = "black";
      }
      if (isCapsPressed) {
        this.keys[
          this.keys_by_classes.indexOf("capslock")
        ].style.backgroundColor = "yellow";
        this.keys[this.keys_by_classes.indexOf("capslock")].style.color =
          "black";
      }
    }, POLL_TIMER);
  }
  detectClick(cursor, onclick) {
    this.cursorOverKey(cursor, onclick);
  }
}

function getKeyPress(key, isClicked) {
  const inp = document.getElementById("inp");
  if (isClicked) {
    if (key.classList.contains("backspace")) {
      inp.value = inp.value.slice(0, -1);
      return;
    }

    if (key.classList.contains("space")) {
      inp.value += " ";
      return;
    }

    if (key.classList.contains("shift")) {
      shiftIsPressed = !shiftIsPressed;
      return;
    }

    // any letter/number/symbol key
    if (shiftIsPressed || isCapsPressed) {
      // currently we are not focussing on extra special characters accessible only using shift
      inp.value += key.textContent.toUpperCase();
      shiftIsPressed = false;
    } else {
      inp.value += key.textContent;
    }
  }
}

// manage keyboard events
const kb = new Keyboard();
const press = document.getElementById("press");
press.addEventListener("click", () => {
  kb.detectClick(cursor.element, getKeyPress);
});
kb.pollCursorLocation(cursor.element);

// manage keyboard open or close
const kbd_open_button = document.getElementById("kbd-btn");
kbd_open_button.addEventListener("click", () => {
  if (kb.element.classList.contains("open")) {
    kb.element.classList.remove("open");
    kb.element.classList.add("close");
    kbd_open_button.textContent = "Open Keyboard";
  } else {
    kb.element.classList.remove("close");
    kb.element.classList.add("open");
    kbd_open_button.textContent = "Close Keyboard";
  }
});
