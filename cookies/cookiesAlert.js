//no hemos dado clase(resumen: hace que las cookies se quiten)
const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

dataLayer = [];

// Mostrar el aviso de cookies siempre que se cargue la página
avisoCookies.classList.add('activo');
fondoAvisoCookies.classList.add('activo');

// Agregar evento al botón para aceptar cookies
botonAceptarCookies.addEventListener('click', () => {
    // Ocultar el aviso cuando se hace clic en aceptar
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');

    // Registrar el evento de aceptación de cookies
    dataLayer.push({'event': 'cookies-aceptadas'});
});
