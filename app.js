let listaDeAmigos = []

actualizarLista()

// Funcion para asignar texto a un elemento HTML
function asignartextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto
    return
}

// Funcion para agregar amigos
function agregarAmigo(){
    // capturar el valor ingresado en el campo de texto
    let ingresarNombre = document.getElementById('amigo').value;

    if(ingresarNombre.trim() === ''){
        alert('Ingrese un nombre, por favor')
        return
    }

    // Agregar el amigo a la lista    
    listaDeAmigos.push(ingresarNombre)

    // Limpiar el campo de texto
    document.getElementById('amigo').value='';

    actualizarLista()

}

// Funcion para construir la lista en formato HTML
function mostrarListaDeAmigos() {
    let lista = ""; // Variable para almacenar los elementos de la lista
    for (let i = 0; i < listaDeAmigos.length; i++) {
        // Agrega cada elemento como un item de lista
        lista += `<li>${listaDeAmigos[i]}</li>`; 
    }
    return lista; // Devuelve la lista como HTML
}

// Funcion para sortear el amigo
function sortearAmigo(){
    // Generamos un numero aleatorio de las posiciones del array
    let aleatorio = Math.floor(Math.random()*listaDeAmigos.length);
    let nombreAleatorio = listaDeAmigos[aleatorio]
    
    asignartextoElemento('ul', `Bingo!!! tu eres mi amigo secreto:  ${nombreAleatorio}`)
}

function actualizarLista(){    
    asignartextoElemento('ul',mostrarListaDeAmigos())
}



