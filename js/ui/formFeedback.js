export function showFormError(selector, message) {
    const alertBox = document.querySelector(selector);

    if (!alertBox) {
        return;
    }

    alertBox.textContent = message;
    alertBox.hidden = false;
}

export function clearFormError(selector) {
    const alertBox = document.querySelector(selector);

    if (!alertBox) {
        return;
    }

    alertBox.textContent = "";
    alertBox.hidden = true;
}
