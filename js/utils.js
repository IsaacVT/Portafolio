function mostrarImagenModal(img) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("imagen-modal");

    modal.style.display = "flex";
    modalImg.src = img.src;
}

function cerrarModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

window.addEventListener("scroll", function () {
    var container = document.querySelector(".container");
    var menu = document.querySelector(".menu__header");
    var logo = document.querySelector("#logo");
    var profile = document.querySelector("#profile");

    var scrollPosition = window.scrollY;
    var breakpoint = 20; // Altura de desplazamiento en la que se activa el cambio

    if (scrollPosition > breakpoint) {
        container.classList.add("container--small");
        menu.classList.add("menu__header--small");
    } else {
        container.classList.remove("container--small");
        menu.classList.remove("menu__header--small");
    }

    // Agrega el siguiente código JavaScript después de la sección anterior
    function scrollToTop() {
        var currentPosition = window.pageYOffset;
        var targetPosition = 0;
        var distance = targetPosition - currentPosition;
        var duration = 800; // Duración del desplazamiento en milisegundos
        var start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            var progress = timestamp - start;
            var percentage = Math.min(progress / duration, 1);
            var easing = easeOutCubic(percentage);
            window.scrollTo(0, currentPosition + distance * easing);

            if (progress < duration) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }

    // Función de temporización easeOutCubic
    function easeOutCubic(t) {
        t--;
        return t * t * t + 1;
    }

    var logo = document.querySelector("#logo");

    logo.addEventListener("click", function () {
        scrollToTop();
    });

    profile.addEventListener("click", function () {
        scrollToTop();
    });
});

var menuItems = document.querySelectorAll(".menu__list__item a");

menuItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

        var menuHeight = 87;
        var target = document.querySelector(this.getAttribute("href"));
        var targetPosition = target.offsetTop - menuHeight; // Restar la altura de la barra de navegación
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    });
});
