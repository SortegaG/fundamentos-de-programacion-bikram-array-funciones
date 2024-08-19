// Arrays 

arrayVacio = [];
arrayNumeros = [0,1,2,3,4,5,6,7,8,9];
arrayNumerosPares = [0, 2, 4, 6, 8];
arrayBidimensional = [[0,1,2],['a', 'b', 'c']]

// Funciones

function suma (a,b) {
    return a + b;
}
// REPASAR ESTO !!

function potenciacion(a, b) {
    if (b === 0) {
        return 1;
    }

    let total = 1;
    let base = a;
    let exponente = b;

    while (exponente > 0) {
        // Si el exponente es impar, multiplica el resultado por la base
        if (exponente % 2 !== 0) {
            total *= base;
        }
        // Eleva la base al cuadrado
        base *= base;
        // Divide el exponente por 2
        exponente = Math.floor(exponente / 2);
    }

    return total;
}

function separarPalabras(str) {
    return str.split(' ');
}

function repetirString (str, num) {
    return str.repeat(num);
}

function esPrimo (num1) {
    if (num1 <= 1) {
        return false;
    }
    for (i = 2; i < num1; i++) {
        if (num1 % i === 0) {
            return false;
        }
    }
return true;
}


// Arrays y funciones 


// REPASAR ESTO !!

function ordenarArray(arr) {
    return arr.sort((a, b) => a - b);
}

function obtenerPares(arr) {
    return arr.filter(num => num % 2 === 0);
}

function pintarArray(arr) {
    return `[${arr.join(', ')}]`;
}

function arrayMapi(arr, func) {
    return arr.map(func);
}

function eliminarDuplicados(arr) {
    return [...new Set(arr)];
}


// Arrays

const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
const holaMundo = ['Hola', 'Mundo'];
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'],[298, 'direccion']];

// Funciones

function multiplicacion (a, b) {
    return a * b;
}

function division (a, b) {
    return a / b;
} 

function esPar (num) {
    if (num % 2 === 0){
        return true
    }
    return false
}

function resta (a, b) {
    return a - b;
}
const arrayFunciones = [suma, resta, multiplicacion]

// Arrays y funciones 

function ordenarArray2(array) {
    return array.sort((a, b) => b - a);
}


function obtenerImpares (array) {
    return array.filter (num => num % 2 !== 0)
}

function sumarArray (array) {
    return array.reduce((acc, num) => acc + num);
}

function multiplicarArray (array) {
    return array.reduce((acc, num) => acc * num)
}

