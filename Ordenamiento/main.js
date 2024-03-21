const numeros = [9,3,1,6,5,88,-1,2,7]
// Salida -> [88,9,7,6,5,3,1,-1]

const ejercicio1 = numeros.sort((current, next) => next - current); 
// for (i) {
//     for (j; numeros - i + 1) {
//         numeros [j] - numeros[j + 1]
//     }

// }
console.log(ejercicio1);
// Crear una funcion que ordene una lista de caracteres segun su valor decimal. 
const letras =   ['b','h','w','e','a']; 

function sortLetras(arreglo) {
    return arreglo.sort((current, next) => {
        return current.charCodeAt(0) - next.charCodeAt(0);
    }) 
}

console.log(sortLetras(letras));

const palabras = ["adios","hola","maximo","no","despedida"]

function contarPalabras(arreglo) {
    return arreglo.sort((current,next) => {
        return current.length - next.length
    })
}
///////


console.log(contarPalabras(palabras))
const coordenadas = [[7,3],[2,2],[1,0],[4,3]]

function calcularDistancia(coord) {
    return Math.sqrt(coord[0] * coord[0] + coord[1] * coord[1])
}

function sortDePuntosEnUnMapa(arreglo) {
   return arreglo.sort ((current,next) => {
        const primerPunto = calcularDistancia(current)
        const segundoPunto = calcularDistancia(next)
        return primerPunto - segundoPunto
    })
}

console.log(sortDePuntosEnUnMapa(coordenadas))


