String.prototype.replaceAt = function(index, character) { 
    return this.substr(0, index) + character + this.substr(index+character.length); // funcion No nativa para reemplazar las letras por _ referencia de https://pablomonteserin.com/
} 

const palabras = ["perro","gato","elefante","hamster","gallina","cerdo","caballo"];//creamos las palabras a usar, si quisieramos que puedan ingresar nuevas palabras al array deberiamos usa let y no una constante

let palabraSorteada = palabras[Math.floor(Math.random()* palabras.length)]; //Sorteamos la palaabra para adivinar
let palabraConGuiones =palabraSorteada.replace(/./g, "_ ");
let letrasUsadas = [];
let errores=0 ;
let fallos = true;
const lose = "has perdido";
const victoria = "victoria";
let cantidad = "Palabra de ".concat(palabraSorteada.length) + " letras"; // variable para mostrar la cantidad de letras en uego para el ususario
document.querySelector("#listo").style.display="none";
document.querySelector("#cantidad").innerHTML=cantidad;
// // aqui comienza la magia, creamos una funcion anonima dentro del evento
document.querySelector("#letra").focus();
document.querySelector("#comprobar").addEventListener("click", ()=>{
    
    const letras= document.querySelector("#letra").value ;
    document.querySelector("#letra").focus();
    document.querySelector("#letrasUsadas").innerHTML=letras;
    for (const i in palabraSorteada){

        if(letras == palabraSorteada[i]){
                
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letras); //llamamos a la Funcion NO NATIVA para realizar el cambio del _ por la letra  
            fallos=false;       
        }   
    }
    document.querySelector("#letras").innerHTML=palabraConGuiones;
    document.querySelector("#letra").value="";
    if (fallos){
        errores++;
        switch(errores){
            case errores = 1 : return document.querySelector("#ahorcado").src="media/ahorcado1.png";
            case errores = 2 : return document.querySelector("#ahorcado").src="media/ahorcado2.png";
            case errores = 3 : return document.querySelector("#ahorcado").src="media/ahorcado3.png";
            case errores = 4 : return document.querySelector("#ahorcado").src="media/ahorcado4.png";
            case errores = 5 : return document.querySelector("#ahorcado").src="media/ahorcado5.png";
            case errores = 6 : return document.querySelector("#ahorcado").src="media/ahorcado6.png";
            case errores = 7 : return document.querySelector("#letras").innerHTML=lose;
            case palabraConGuiones.indexOf("_") < 0:return document.querySelector("#letras").innerHTML=victoria;
        }
    }    
    if(palabraConGuiones.indexOf("_") < 0){//por algun extraño motivo esto tambien tiene q estar sino no funciona nada xD
        cambiarEstilos();
        let ganaste = document.querySelector("#letras").innerHTML=victoria;
        let palabraGanadora = document.querySelector("#palabra").innerHTML=palabraSorteada;
        return ganaste.concat(palabraGanadora) ;
    }
})
//funcion para cambiar los estilos de lo elementos irrelevantes 
function cambiarEstilos(){
    document.querySelector("#cantidad").style.display="none";
    document.querySelector("#comprobar").style.display="none";
    document.querySelector("#letra").style.display="none";
    document.querySelector("#formularioParar").style.display="none";
    document.querySelector("#listo").style.display="";
}
