export function initCategoryToggles(containerSelector) {
    const container = document.querySelector(containerSelector);

    if (!container) {
        return;
    }

    container.addEventListener("click", (event) => {
        const button = event.target.closest(".js-categoria-boton");

        if (!button) {
            return;
        }

        const panelId = button.dataset.panel;
        const panel = document.getElementById(panelId);

        if (!panel) {
            return;
        }

        const isHidden = panel.hasAttribute("hidden");

        document.querySelectorAll(".js-categoria-boton[aria-expanded='true']").forEach((expandedButton) => {
            expandedButton.setAttribute("aria-expanded", "false");
        });

        document.querySelectorAll(".panel-categoria").forEach((visiblePanel) => {
            visiblePanel.setAttribute("hidden", "");
        });

        if (!isHidden) {
            return;
        }

        panel.removeAttribute("hidden");
        button.setAttribute("aria-expanded", "true");
        panel.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}
