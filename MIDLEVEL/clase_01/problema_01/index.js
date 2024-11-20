let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

//comprar = confirm(`El alto es ${alto}, el ancho es ${ancho}`)

//if (comprar) {
//    alert("Compra realizada exitosamente!")
//} else {
//    alert("Compra cancelada!")
//}

let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: <b>${protocol}</b><br>`;
html += `Hostname: <b>${hostname}</b><br>`;
html += `Pathname: <b>${pathname}</b><br>`;
html += `URL completa: <b>${href}</b><br>`;

document.write(html)


