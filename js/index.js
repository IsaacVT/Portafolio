import { navActions } from "./navBar.js";
import { changeTheme } from "./temas.js";
import { validarInput, valueTextArea, sendForm } from "./validacion.js";
import { cerrarModal, mostrarImagenModal } from "./modal.js";

// Navbar & Tema
changeTheme();
navActions();

// Experiencia
const evidenceElements = document.querySelectorAll(".experience__evidence");
evidenceElements.forEach((evidenceElement) => {
    const imgElements = evidenceElement.querySelectorAll("img");
    imgElements.forEach((imgE) => {
        imgE.addEventListener("click", () => {
            mostrarImagenModal(imgE);
        });
    });

    const spanElement = evidenceElement.querySelector("span");
    spanElement.addEventListener("click", () => {
        cerrarModal();
    });
});

// Formulario
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const asuntoInput = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const formulario = document.getElementById("formulario");

validarInput(nombreInput, "letras");
validarInput(emailInput, "email");
validarInput(asuntoInput, "letras");
valueTextArea(mensaje);
sendForm(formulario);
