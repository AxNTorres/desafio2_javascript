//ejercicio 1

const imagen = document.getElementById("hunterx"); //llame a una constante aparte, si quiero cambiar directo desde la clase y no hacer varios, debo ocupar if y else con image.style.border

imagen.addEventListener("click", function () {
    imagen.classList.toggle ("borde")});

// Ejercicio 2
document.getElementById("boton_verificador").addEventListener("click", function() {
    // asigno los valores, pereinnt es para convertirlo en numeros naturales
    const cantidad1 = parseInt(document.getElementById("cantidad1").value) || 0; // ||0 es para que le asigne cero si esta vacio
    const cantidad2 = parseInt(document.getElementById("cantidad2").value) || 0;
    const cantidad3 = parseInt(document.getElementById("cantidad3").value) || 0;

    // aqui sumo los stickers seleccionados
    const totalStickers = cantidad1 + cantidad2 + cantidad3;

    // asigno para modificarlo
    const respuesta = document.getElementById("respuesta");

    // verifico, si total.. es menor o igual a 10 digo que llavas tantos 
    if (totalStickers <= 10) {
        respuesta.innerHTML = `Llevas ${totalStickers} stickers`;
    } else { //aqui asigno en caso que no
        respuesta.innerHTML = "Llevas demasiados stickers";
    }
});




//ejercicio 3
document.getElementById("verificar_password").addEventListener("click", function()
{
const parte1 = document.getElementById("parte1").value; //tomo los valores
const parte2 = document.getElementById("parte2").value;
const parte3 = document.getElementById("parte3").value;

const password = parte1 + parte2 + parte3; //los sumo
const resultado = document.getElementById("respuesta_password"); //a la variable resultado le doy el valor de respuesta_password desde el html

if (password === "911") {
    resultado.innerHTML = "password 1 es correcto";
} 
else if (password === "714") {
        resultado.innerHTML = "password 2 es correcto";
}
else {
    resultado.innerHTML = "password es incorrecto";
}
}
);