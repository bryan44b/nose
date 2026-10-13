// 1. Seleccionamos todos los elementos necesarios
const botones = document.querySelectorAll('.mood-btn');
const reproductor = document.getElementById('reproductor');
const contenedor = document.getElementById('contenedorVideo');

// 2. Le damos instrucciones a cada botón
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        // Extraemos el enlace guardado en el atributo 'data-url' del HTML
        const urlCancion = boton.getAttribute('data-url');
        
        // Se lo asignamos al iframe para que cargue el video
        reproductor.src = urlCancion;
        
        // Hacemos visible el reproductor
        contenedor.style.display = 'block';
    });
});