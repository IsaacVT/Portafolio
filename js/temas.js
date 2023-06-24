const themeButton = document.getElementById("tema-btn");
const themeStyle = document.getElementById("estilo-tema");
const logo = document.getElementById("logo");
const signature = document.getElementById("signature");

const changeTheme = () => {
    themeButton.addEventListener("click", () => {
        const elements = document.querySelectorAll(
            "li.skills__img, li.hobbies__img"
        );

        const links = document.querySelectorAll("li.title__network__item a");

        themeButton.classList.toggle("active");

        if (themeButton.classList.contains("active")) {
            themeStyle.setAttribute("href", "css/tema-oscuro.css");
            logo.setAttribute("src", "assets/general/vector_1_2.png");
            signature.setAttribute("src", "assets/general/signature_2.png");
            imgFilter("dark", elements);
            imgFilter("dark", links);
        } else {
            themeStyle.setAttribute("href", "css/tema-claro.css");
            logo.setAttribute("src", "assets/general/vector_1_1.png");
            signature.setAttribute("src", "assets/general/signature_1.png");
            imgFilter("ligth", elements);
            imgFilter("ligth", links);
        }
    });
};

function imgFilter(theme, list) {
    list.forEach((item) => {
        var img = item.querySelector("img");
        theme === "dark"
            ? (img.style.filter = "contrast(0) brightness(2)")
            : (img.style.filter = "none");
    });
}

export { changeTheme };
