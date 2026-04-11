import { renderMenu } from "../../render/menuRenderer.js";

export function initMenu({ menuData, buttonsSelector, panelsSelector }) {
    const buttonsContainer = document.querySelector(buttonsSelector);
    const panelsContainer = document.querySelector(panelsSelector);

    if (!buttonsContainer || !panelsContainer) {
        return;
    }

    const { buttonsMarkup, panelsMarkup } = renderMenu(menuData);
    buttonsContainer.innerHTML = buttonsMarkup;
    panelsContainer.innerHTML = panelsMarkup;
}
