// script.js

document.addEventListener("DOMContentLoaded", function () {
    const leftEye = document.querySelector(".left-eye");
    const rightEye = document.querySelector(".right-eye");
    const face = document.querySelector(".face");

    // Function to close both eyes and animate eyebrows and eyelashes down
    function closeEyes() {
        document.querySelectorAll(".shut span").forEach(span => {
            span.style.height = "100%";
        });
        face.classList.add("eyes-shut");
    }

    // Function to open both eyes and animate eyebrows and eyelashes up
    function openEyes() {
        document.querySelectorAll(".shut span").forEach(span => {
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
