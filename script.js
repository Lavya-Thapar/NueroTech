// script.js

document.addEventListener("DOMContentLoaded", function () {
    const leftEye = document.querySelector(".left-eye");
    const rightEye = document.querySelector(".right-eye");
    const face = document.querySelector(".face");

  // Function to close both eyes and animate eyebrows and eyelashes down
    function closeEyes() {
    document.querySelectorAll(".shut span").forEach((span) => {
        span.style.height = "100%";
    });
    face.classList.add("eyes-shut");
    }

  // Function to open both eyes and animate eyebrows and eyelashes up
    function openEyes() {
    document.querySelectorAll(".shut span").forEach((span) => {
        span.style.height = "0";
    });
    face.classList.remove("eyes-shut");
    }

  // Event listeners for mouseenter and mouseleave on both eyes
    leftEye.addEventListener("mouseenter", closeEyes);
    leftEye.addEventListener("mouseleave", openEyes);

    rightEye.addEventListener("mouseenter", closeEyes);
    rightEye.addEventListener("mouseleave", openEyes);
});

/* Change expression on button click */
const sad_button = document.getElementById("sad");
const happy_button = document.getElementById("happy");
const angry_button = document.getElementById("angry");
const neutral_button = document.getElementById("neutral");
const shy_button = document.getElementById("shy");

const main = document.getElementsByTagName("main")[0];

// helper function to avoid conflicts in classes
function remove_all_expressions() {
    main.classList.remove("sad");
    main.classList.remove("happy");
    main.classList.remove("angry");
    main.classList.remove("neutral");
    main.classList.remove("shy");
}

function change_expression(new_expression) {
    remove_all_expressions();
    main.classList.add(new_expression);
}

sad_button.addEventListener("click", () => change_expression("sad"));
happy_button.addEventListener("click", () => change_expression("happy"));
angry_button.addEventListener("click", () => change_expression("angry"));
neutral_button.addEventListener("click", remove_all_expressions);
shy_button.addEventListener("click", () => change_expression("shy"));
