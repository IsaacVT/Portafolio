const themeButton = document.getElementById("tema-btn");
const themeStyle = document.getElementById("estilo-tema");
const logo = document.getElementById("logo");
const signature = document.getElementById("signature");

themeButton.addEventListener("click", function () {
    themeButton.classList.toggle("active");

    if (themeStyle.getAttribute("href") === "css/tema-claro.css") {
        themeStyle.setAttribute("href", "css/tema-oscuro.css");
        logo.setAttribute("src", "assets/general/vector_1_2.png");
        signature.setAttribute("src", "assets/general/signature_2.png");
    } else {
        themeStyle.setAttribute("href", "css/tema-claro.css");
        logo.setAttribute("src", "assets/general/vector_1_1.png");
        signature.setAttribute("src", "assets/general/signature_1.png");
    }
});
