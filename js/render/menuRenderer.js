function renderStars(rating) {
    if (!rating) {
        return "";
    }

    const stars = Array.from({ length: 5 }, (_, index) => {
        const activeClass = index < rating ? "estrella activa" : "estrella";
        return `<span class="${activeClass}">★</span>`;
    }).join("");

    return `<div class="estrellas" aria-label="${rating} de 5 estrellas por popularidad">${stars}</div>`;
}

function renderDishCard(item) {
    const descriptionMarkup = item.description ? `<p>${item.description}</p>` : "";

    return `
        <article class="plato-card">
            <img src="${item.image}" alt="${item.alt}" loading="lazy">
            <div class="plato-card__contenido">
                <h4>${item.title}</h4>
                ${descriptionMarkup}
                ${renderStars(item.rating)}
            </div>
        </article>
    `;
}

function renderCategoryButton(category) {
    const panelId = `panel-${category.id}`;

    return `
        <button class="categoria categoria-boton categoria--${category.id} js-categoria-boton" id="categoria-${category.id}" type="button" aria-expanded="false" aria-controls="${panelId}" data-panel="${panelId}">
            <span class="icono">${category.icon}</span>
            <p>${category.teaser}</p>
        </button>
    `;
}

function renderCategoryHeader(category) {
    return `
        <div class="panel-categoria__encabezado">
            <p class="panel-postres__eyebrow">${category.eyebrow}</p>
            <h3>${category.heading}</h3>
            <p>${category.description}</p>
        </div>
    `;
}

function renderItemsGrid(items) {
    return `<div class="platos-grid">${items.map(renderDishCard).join("")}</div>`;
}

function renderDrinkGroup(group) {
    return `
        <section class="bloque-bebidas">
            <h4 class="bloque-bebidas__titulo">${group.title}</h4>
            ${renderItemsGrid(group.items)}
        </section>
    `;
}

function renderCategoryPanel(category) {
    const contentMarkup = category.groups
        ? category.groups.map(renderDrinkGroup).join("")
        : renderItemsGrid(category.items);

    return `
        <section class="panel-categoria panel-categoria--${category.id}" id="panel-${category.id}" hidden>
            ${renderCategoryHeader(category)}
            ${contentMarkup}
        </section>
    `;
}

export function renderMenu(menuData) {
    return {
        buttonsMarkup: menuData.categories.map(renderCategoryButton).join(""),
        panelsMarkup: menuData.categories.map(renderCategoryPanel).join("")
    };
}
