// Obtener referencias a los elementos del formulario
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const asuntoInput = document.getElementById("asunto");
const mensajeInput = document.getElementById("mensaje");
const formulario = document.getElementById("formulario");

// Validar nombre
function validarInput(elemento, tipo) {
    let textoValido = true;

    elemento.addEventListener("input", () => {
        const { msg, valid } = validaTexto(elemento.value, tipo);
        textoValido = valid;

        elemento.setCustomValidity(msg);
        elemento.reportValidity();
    });

    elemento.addEventListener("blur", () => {
        if (!textoValido) {
            elemento.classList.add("invalid");
        } else {
            elemento.classList.remove("invalid");
        }
    });
}

function validaTexto(texto, tipo) {
    if (tipo === "letras") {
        if (texto.length < 2 && texto.length > 50) {
            return {
                msg: "El texto debe tener de 2 a 50 caracteres",
                valid: false,
            };
        }

        if (/\d/.test(texto)) {
            return {
                msg: "No se permiten números",
                valid: false,
            };
        }

        if (/[!@#$%^&*(),.?":{}|<>]/.test(texto)) {
            return {
                msg: "No se permiten caracteres especiales",
                valid: false,
            };
        }
    } else if (tipo === "email") {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(texto)) {
            return {
                msg: "El texto debe ser un correo electrónico válido",
                valid: false,
            };
        }
    }

    return {
        msg: "",
        valid: true,
    };
}

function valueTextArea() {
    const textarea = document.getElementById("mensaje");
    const characterCount = document.getElementById("character-count");
    const maxLength = 300;

    textarea.addEventListener("input", updateCharacterCount);

    function updateCharacterCount() {
        let inputText = textarea.value;

        if (inputText.length > maxLength) {
            inputText = inputText.substring(0, maxLength);
            textarea.value = inputText;

            textarea.classList.add("invalid");
        } else {
            textarea.classList.remove("invalid");
        }

        characterCount.textContent = `${inputText.length}/${maxLength}`;
    }

    textarea.addEventListener("blur", () => {
        if (!textarea.value > 1) {
            textarea.classList.add("invalid");
        } else {
            textarea.classList.remove("invalid");
        }
    });

    updateCharacterCount();
}

function validaciones() {
    validarInput(nombreInput, "letras");
    validarInput(emailInput, "email");
    validarInput(asuntoInput, "letras");
    valueTextArea();
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const about = e.target[2].value;
    const msg = e.target[3].value;

    const data = {
        name,
        email,
        about,
        msg,
    };

    console.log("file: validacion.js:113 ~ data:", data);
});

validaciones();
