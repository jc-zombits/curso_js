// setTimeout()
const temporizador = setTimeout(() => {
    document.write("Hola setTimeout!")
}, 2000);

// Si queremos detener el temporizador
clearTimeout(temporizador);

// Si quiero repetir por ejemplo algo
const repeticion = setInterval(() => {
    document.write("Repetición!")
}, 2000);

setTimeout(() => {
    clearInterval(repeticion)
}, 7000);



