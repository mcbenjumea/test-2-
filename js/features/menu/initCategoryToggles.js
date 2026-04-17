export function initCategoryToggles(containerSelector) {
    const container = document.querySelector(containerSelector);

    if (!container) {
        return;
    }

    const buttons = Array.from(container.querySelectorAll(".js-categoria-boton"));
    const panels = Array.from(container.querySelectorAll(".panel-categoria"));

    if (!buttons.length || !panels.length) {
        return;
    }

    function clearActivePanel() {
        buttons.forEach((expandedButton) => {
            expandedButton.setAttribute("aria-expanded", "false");
        });

        panels.forEach((visiblePanel) => {
            visiblePanel.setAttribute("hidden", "");
        });
    }

    function setActivePanel(button) {
        if (!button) {
            return;
        }

        const panelId = button.dataset.panel;
        const panel = document.getElementById(panelId);

        if (!panel) {
            return;
        }

        clearActivePanel();
        panel.removeAttribute("hidden");
        button.setAttribute("aria-expanded", "true");
    }

    clearActivePanel();

    container.addEventListener("mouseenter", (event) => {
        const button = event.target.closest(".js-categoria-boton");
        setActivePanel(button);
    }, true);

    container.addEventListener("focusin", (event) => {
        const button = event.target.closest(".js-categoria-boton");
        setActivePanel(button);
    });

    container.addEventListener("click", (event) => {
        const button = event.target.closest(".js-categoria-boton");
        setActivePanel(button);
    });
}
