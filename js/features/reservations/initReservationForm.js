import { validateReservationForm } from "../../domain/reservationValidator.js";
import { clearFormError, showFormError } from "../../ui/formFeedback.js";

export function initReservationForm({ formSelector, errorSelector }) {
    const form = document.querySelector(formSelector);

    if (!form) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const result = validateReservationForm({
            name: formData.get("nombre") ?? "",
            email: formData.get("email") ?? "",
            message: formData.get("mensaje") ?? ""
        });

        if (!result.ok) {
            showFormError(errorSelector, result.message);
            return;
        }

        clearFormError(errorSelector);
        const name = formData.get("nombre") ?? "";
        alert(`Solicitud enviada para ${name}. Nos contactaremos pronto.`);
        form.reset();
    });
}
