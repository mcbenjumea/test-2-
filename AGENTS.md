# Repository Guidelines

## Estructura del proyecto y organización de módulos
Este repositorio es un sitio estático de restaurante. `index.html` es el único punto de entrada. Los estilos viven en `css/estilos.css`. El JavaScript arranca en `js/main.js` y está dividido por responsabilidad: `js/data/` para datos del menú, `js/render/` para generación de marcado, `js/features/` para inicialización de UI, `js/domain/` para reglas de validación y `js/ui/` para utilidades de feedback en el DOM. Los recursos visuales se guardan en `assets/` y todavía existen algunos `.jpeg` heredados en la raíz. `js/validador.js` es un script antiguo; para trabajo nuevo, prioriza los módulos importados desde `js/main.js`.

## Comandos de desarrollo, prueba y ejecución
Este proyecto no tiene paso de build ni gestor de paquetes.

- `open index.html`: vista previa rápida en navegador en macOS.
- `python3 -m http.server 8000`: levanta un servidor estático local desde la raíz del repo.
- `python3 -m http.server 8000 --directory /Users/mariacarolinabenjumea/Documents/test_2`: sirve este repo explícitamente desde cualquier directorio.

Usa servidor local cuando pruebes imports ES modules, imágenes con `loading="lazy"` y contenido embebido.

## Estilo de código y convenciones de nombres
Usa indentación de 4 espacios en HTML, CSS y JavaScript para mantener consistencia con los archivos actuales. Mantén los módulos de JavaScript pequeños y con una sola responsabilidad; prefiere exports nombrados como `initMenu` o `validateReservationForm`. Usa `camelCase` para identificadores de JS, kebab-case para clases CSS como `.panel-categoria`, y copy visible al usuario en español. Reutiliza la separación actual por carpetas en lugar de agregar scripts extensos inline en `index.html`.

## Guía de pruebas
Todavía no existe una suite automática, así que cada cambio requiere validación manual en navegador. Verifica lo siguiente:

- los botones del menú se renderizan desde `js/data/menu.js`
- el cambio de categorías funciona con clic y con foco de teclado
- la validación del formulario de reservas muestra y limpia errores correctamente
- el layout sigue siendo usable en desktop y mobile

Si más adelante agregas pruebas automáticas, colócalas junto al módulo que cubren o en un directorio raíz `tests/`.

## Guía de commits y pull requests
Los commits recientes usan mensajes cortos y descriptivos en español, por ejemplo `Config. menu` y `Configuracion fuente y color menu`. Mantén cada commit enfocado y redactado en modo imperativo. Los pull requests deben incluir un resumen breve, el módulo o pantalla afectada, notas de prueba manual y capturas si hay cambios visuales.

## Higiene del repositorio
No subas archivos `.DS_Store` ni duplicados temporales de imágenes. Guarda los nuevos assets dentro de `assets/` y refiérelos con rutas relativas desde `index.html` o desde los módulos de datos en JavaScript.
