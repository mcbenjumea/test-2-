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

function gestionarEnvioPampa() {
    const nombreCliente = document.querySelector('#nombre').value;
    const correoCliente = document.querySelector('#email').value;

    if (nombreCliente === "" || correoCliente === "") {
        alert("No se puede enviar la solicitud: el nombre o el correo están vacíos.");
        return false;
    }

    alert(`Solicitud enviada para ${nombreCliente}. Nos contactaremos pronto con noticias de nuestras sedes en Palermo, Almagro o Caballito.`);
    return true;
}

function gestionarEnvioPampa () {
const descripcionMensaje = document.querySelector('#mensaje').value;

 if (descripcionMensaje === "" || mensaje === "") {
        alert("No se puede enviar la solicitud: el mensaje está vacío.");
        return false;
    }

    alert(`Solicitud enviada para ${descripcionMensaje}. Nos contactaremos pronto con noticias de nuestras sedes en Palermo, Almagro o Caballito.`);
    return true;

}
