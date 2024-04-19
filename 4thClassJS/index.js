const firstName = 'Yaxche'
const age = 30; 
const birthYear = 1993;

function printAge() {
    const firstName = 'Arturo'
    let output =  `${firstName}, tu edad es: ${age} por que naciste en ${birthYear}`
    console.log(output)
}

printAge()

// codigol sincrono
// const p = document.querySelector('p'); 
// p.textContent = 'Mi Nombre es Yaxche'; 
// alert ('Texto Agregado!');
// p.style.color = 'goldenrod';

// codigo asincrono
const p = document.querySelector('p'); 
setTimeout(function (){
    p.textContent = 'Mi nombre es Yaxche'; 
}, 5000);
p.style.color = 'goldenrod'; 



