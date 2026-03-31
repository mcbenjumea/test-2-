console.log("Pampa está vivo");
export const validadorPampa = {
    estaVacio: (texto) => texto.trim() === "",
    emailInvalido: (email) => !email.includes("@"),
    
    verificarFormulario: (nombre, email, mensaje) => {
        if (validadorPampa.estaVacio(nombre) || validadorPampa.estaVacio(email) || validadorPampa.estaVacio(mensaje)) {
            return { ok: false, msg: "Faltan datos en la reserva." };
        }
        if (validadorPampa.emailInvalido(email)) {
            return { ok: false, msg: "El email de Pampa no es válido." };
        }
        return { ok: true };
    }
};

export const uiPampa = {
    mostrarError: (mensaje) => {
        const alerta = document.getElementById("error-msg");
        alerta.textContent = mensaje;
        alerta.style.display = "block";
        alerta.style.color = "gold"; // El estilo de Pampa
    },
    limpiarFormulario: (form) => form.reset()
};