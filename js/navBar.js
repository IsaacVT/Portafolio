const changeHeight = () => {
    window.addEventListener("scroll", function () {
        var container = document.querySelector(".container");
        var menu = document.querySelector(".menu__header");

        var scrollPosition = window.scrollY;
        var breakpoint = 20;

        if (scrollPosition > breakpoint) {
            container.classList.add("container--small");
            menu.classList.add("menu__header--small");
        } else {
            container.classList.remove("container--small");
            menu.classList.remove("menu__header--small");
        }
    });
};

const returnTop = () => {
    var logo = document.querySelector("#logo");
    var profile = document.querySelector("#profile");

    logo.addEventListener("click", function () {
        scrollToTop();
    });

    profile.addEventListener("click", function () {
        scrollToTop();
    });

    function scrollToTop() {
        var currentPosition = window.scrollY;
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

    function easeOutCubic(t) {
        t--;
        return t * t * t + 1;
    }
};

const deployMenu = () => {
    var menuContainer = document.getElementById("menu__container");
    var menuList = document.getElementById("menu__list");

    if (window.screen.width < 1024) {
        const menuDeployBtn = document.createElement("li");
        menuDeployBtn.setAttribute("class", "btn__show__menu");

        menuDeployBtn.addEventListener("click", () => {
            menuList.classList.toggle("active");
            menuDeployBtn.classList.toggle("active");
        });

        menuContainer.appendChild(menuDeployBtn);
    } else {
        const showMenuBtn = document.querySelector(".btn__show__menu");

        if (showMenuBtn) {
            showMenuBtn.remove();
        }
    }
};

const fixNavegation = () => {
    var menuList = document.getElementById("menu__list");
    var menuItems = document.querySelectorAll(".menu__list__item a");

    menuItems.forEach(function (item) {
        item.addEventListener("click", function (event) {
            event.preventDefault();

            if (menuList.classList.contains("active")) {
                const showMenuBtn = document.querySelector(".btn__show__menu");

                menuList.classList.remove("active");

                if (showMenuBtn) {
                    showMenuBtn.classList.remove("active");
                }
            }

            var menuHeight = 87;
            var target = document.querySelector(this.getAttribute("href"));
            var targetPosition = target.offsetTop - menuHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });
        });
    });
};

const navActions = () => {
    deployMenu();
    changeHeight();
    returnTop();
    fixNavegation();
};

export { navActions };
