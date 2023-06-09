const themeButton = document.getElementById("tema-btn");
const themeStyle = document.getElementById("estilo-tema");
const logo = document.getElementById("logo");
const signature = document.getElementById("signature");
const elements = document.querySelectorAll("li.skills__img, li.hobbies__img");
const links = document.querySelectorAll("li.title__network__item a");

themeButton.addEventListener("click", function () {
    themeButton.classList.toggle("active");

    if (themeStyle.getAttribute("href") === "css/tema-claro.css") {
        themeStyle.setAttribute("href", "css/tema-oscuro.css");
        logo.setAttribute("src", "assets/general/vector_1_2.png");
        signature.setAttribute("src", "assets/general/signature_2.png");
        imgFilter("ligth");
    } else {
        themeStyle.setAttribute("href", "css/tema-claro.css");
        logo.setAttribute("src", "assets/general/vector_1_1.png");
        signature.setAttribute("src", "assets/general/signature_1.png");
        imgFilter("");
    }
});

function imgFilter(theme) {
    links.forEach((link) => {
        var img = link.querySelector("img");
        theme === "ligth"
            ? (img.style.filter = "contrast(0) brightness(2)")
            : (img.style.filter = "none");
    });

    elements.forEach((element) => {
        var img = element.querySelector("img");
        theme === "ligth"
            ? (img.style.filter = "contrast(0) brightness(2)")
            : (img.style.filter = "none");
    });
}
