function isEmpty(value) {
    return value.trim() === "";
}

function isInvalidEmail(email) {
    return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateReservationForm({ name, email, message }) {
    if (isEmpty(name) || isEmpty(email) || isEmpty(message)) {
        return { ok: false, message: "Faltan datos en la reserva." };
    }

    if (isInvalidEmail(email)) {
        return { ok: false, message: "El email de Pampa no es valido." };
    }

    return { ok: true };
}
