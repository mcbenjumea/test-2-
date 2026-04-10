console.log("Pampa está vivo");

export const validadorPampa = {
    estaVacio: (texto) => texto.trim() === "",
    emailInvalido: (email) => !email.includes("@"),

    verificarFormulario: (nombre, email, mensaje) => {
        if (
            validadorPampa.estaVacio(nombre) ||
            validadorPampa.estaVacio(email) ||
            validadorPampa.estaVacio(mensaje)
        ) {
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
        if (!alerta) {
            return;
        }

        alerta.textContent = mensaje;
        alerta.style.display = "block";
        alerta.style.color = "gold";
    },
    limpiarFormulario: (form) => form.reset()
};

function configurarFormularioPampa() {
    const formulario = document.getElementById("form-pampa");

    if (!formulario) {
        return;
    }

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const nombre = document.getElementById("nombre")?.value ?? "";
        const email = document.getElementById("email")?.value ?? "";
        const mensaje = document.getElementById("mensaje")?.value ?? "";
        const resultado = validadorPampa.verificarFormulario(nombre, email, mensaje);

        if (!resultado.ok) {
            uiPampa.mostrarError(resultado.msg);
            return;
        }

        alert(`Solicitud enviada para ${nombre}. Nos contactaremos pronto.`);
        uiPampa.limpiarFormulario(formulario);
    });
}

function configurarPanelCategoria(botonId, panelId) {
    const boton = document.getElementById(botonId);
    const panel = document.getElementById(panelId);

    if (!boton || !panel) {
        return;
    }

    boton.addEventListener("click", () => {
        const estabaOculto = panel.hasAttribute("hidden");

        if (estabaOculto) {
            panel.removeAttribute("hidden");
            boton.setAttribute("aria-expanded", "true");
            panel.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }

        panel.setAttribute("hidden", "");
        boton.setAttribute("aria-expanded", "false");
    });
}

configurarFormularioPampa();
configurarPanelCategoria("categoria-principales", "panel-principales");
configurarPanelCategoria("categoria-postres", "panel-postres");
configurarPanelCategoria("categoria-bebidas", "panel-bebidas");
