import { menuData } from "./data/menu.js";
import { initMenu } from "./features/menu/initMenu.js";
import { initCategoryToggles } from "./features/menu/initCategoryToggles.js";
import { initReservationForm } from "./features/reservations/initReservationForm.js";

initMenu({
    menuData,
    buttonsSelector: ".js-menu-buttons",
    panelsSelector: ".js-menu-panels"
});

initCategoryToggles(".menu-categorias");

initReservationForm({
    formSelector: "#form-pampa",
    errorSelector: "#error-msg"
});
