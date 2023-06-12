const mostrarImagenModal = (img) => {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("imagen-modal");

    modal.style.display = "flex";
    modalImg.src = img.src;
};

const cerrarModal = () => {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
};

export { mostrarImagenModal, cerrarModal };
