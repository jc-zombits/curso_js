    //const button = document.querySelector(".button");
    //button.onclick = () => {
    //    alert("Click al boton")
    //}
// Esta forma no es recomendable ahora por una serie de problemas que tiene

// La forma correcta es esta. Recordemos que no se debe usar funcion flecha. pero, mejor es de otra forma.
    //const button = document.querySelector(".button");
    //button.addEventListener("click", saludar);
    //function saludar() {
    //    alert("Hola button");
    //}

// Esta forma es mucho mejor
const button = document.querySelector(".button");
button.addEventListener("click", () => {
    alert("Hola button");
})

// Para remover un evento, deberá ser con una función

// Objeto event(e)
const button2 = document.querySelector(".button2");
button2.addEventListener("click", (e) => {
    alert("Hola button 2");
    console.log(e);
    console.log(e.target);
})

// Event Flow - Bubbling / Capturing. Se ejecuta del más específico al menos específico
const button3 = document.querySelector(".button3");
const contenedor_1 = document.querySelector(".contenedor-1");
const contenedor_2 = document.querySelector(".contenedor-2");

button3.addEventListener("click", (e) => {
    alert("Di click en el botón");
    e.stopPropagation();    // Con esto detenemos la propagación y solo se ejcutara el evento del botón.
})

contenedor_1.addEventListener("click", (e) => {
    alert("Di click en el contenedor verde");
})    // al colocar true despues de la llave, tener la propiedad true, se ejecutara primero que los demas.

contenedor_2.addEventListener("click", (e) => {
    alert("Di click en el contenedor rojo");
})





