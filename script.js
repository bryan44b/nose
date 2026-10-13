// 1. Lista de enlaces a fotos divertidas o memes de Martin
const fotosMartin = [
    "imagenes/img3.png",
    "imagenes/img4.jpg",
    "imagenes/img5.jpg",
    "imagenes/img6.jpg",
    "imagenes/img7.jpg"
];

// 2. Seleccionamos el botón y el contenedor del HTML
const boton = document.getElementById("botonMartin");
const contenedor = document.getElementById("resultadoEmergencia");

// 3. Le decimos al botón qué hacer al darle clic
boton.addEventListener("click", () => {
    // Genera un número aleatorio basado en la cantidad de fotos en tu lista
    const indiceAleatorio = Math.floor(Math.random() * fotosMartin.length);
    
    // Inyecta la imagen seleccionada dentro del contenedor vacío en el HTML
    contenedor.innerHTML = `<img src="${fotosMartin[indiceAleatorio]}" alt="Foto de Martin">`;
});