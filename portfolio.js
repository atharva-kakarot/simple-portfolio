let modeButton = document.getElementById("mode-button");

function toggleMode() {
    let currentMode = sessionStorage.getItem("mode") || "dark";
    currentMode = currentMode === "dark" ? "light" : "dark";
    sessionStorage.setItem("mode", currentMode);
    document.body.classList.toggle("light-mode");
    document.body.style.transition = "0.5s";

    let icons = document.querySelectorAll(".contact-details");
    for (let i = 0; i <= icons.length; i++) {
        icons[i].classList.toggle("icon-light-mode");
        icons[i].style.transition = "0.5s";
    }
}

modeButton.addEventListener("click", toggleMode);

window.addEventListener("load", function () {
    let selectedMode = sessionStorage.getItem("mode");
    if (selectedMode === "light") {
        document.body.classList.add("light-mode");
        let icons = document.querySelectorAll(".contact-details");
        for (let i = 0; i <= icons.length; i++) {
            icons[i].classList.toggle("icon-light-mode");
            icons[i].style.transition = "0.5s";
        }
    }
});