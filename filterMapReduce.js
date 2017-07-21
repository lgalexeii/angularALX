/*Filter, map, reduce*/
var arreglo = [2, 5, 7, 9];
var arregloPares = filtrarPares(arreglo);
function filtrarPares(fullArr) {
    var inArr = [];
    for (var _i = 0, fullArr_1 = fullArr; _i < fullArr_1.length; _i++) {
        var elemento = fullArr_1[_i];
        if (elemento % 2 == 0) {
            inArr.push(elemento);
        }
    }
    return inArr;
}
arregloPares = filtrar(function (elemento) {
    return elemento % 2 != 0;
});
for (var _i = 0, arregloPares_1 = arregloPares; _i < arregloPares_1.length; _i++) {
    var elemento = arregloPares_1[_i];
    console.log(elemento);
}
/*----------------Filter , con el uso de un callback----------*/
function filtrar(callback) {
    var filtrados = [];
    for (var _i = 0, arreglo_1 = arreglo; _i < arreglo_1.length; _i++) {
        var elemento = arreglo_1[_i];
        if (callback(elemento)) {
            filtrados.push(elemento);
        }
    }
    return filtrados;
}
var suma = function (a, b) {
    return a + b;
};
var mult = function (a, b) {
    return a * b;
};
var div = function (a, b) {
    return a / b;
};
var x = ejecutarFuncion(suma, 6, 7);
var y = ejecutarFuncion(mult, 4, 5);
var z = ejecutarFuncion(div, 20, 4);
console.log("x = " + x);
console.log("y = " + y);
console.log("z = " + z);
function ejecutarFuncion(oper, a, b) {
    return oper(a, b);
}
///////////////////////////////////////////////
var arregloAlCuadrado = elevarAlCuadrado([2, 5, 7, 9]);
console.log("arregloAlCuadrado:" + arregloAlCuadrado);
//4,25,49,81
function elevarAlCuadrado(arrIn) {
    var arrSr = [];
    for (var _i = 0, arrIn_1 = arrIn; _i < arrIn_1.length; _i++) {
        var elem = arrIn_1[_i];
        arrSr.push(Math.pow(elem, 2));
    }
    return arrSr;
}
//////////////////////////////////////////////////////
var arregloAlCuadrado2 = mapear([2, 5, 7, 9], function (elemento) {
    return Math.pow(elemento, 2);
});
console.log("arregloAlCuadrado2:" + arregloAlCuadrado2);
//4,25,49,81
function mapear(arrIn, oper) {
    for (var elem in arrIn) {
        arrIn[elem] = oper(arrIn[elem]);
    }
    return arrIn;
}
//////////////////////////////////////////
var longs = mapear(["Uno", "Dos", "Tres", "Cuatro"], function (elemento) {
    return elemento.length;
});
console.log("Longitudes: " + longs);
/////////////////////////////////
var total = calcularTotal(arreglo);
console.log("total: " + total);
function calcularTotal(arrIn) {
    var total = 0;
    for (var _i = 0, arrIn_2 = arrIn; _i < arrIn_2.length; _i++) {
        var el = arrIn_2[_i];
        total += el;
    }
    return total;
}
/////////////////////////////////////
var totReduced = reducir(arreglo, 0, function (acum, elem) {
    return acum + elem;
});
console.log("Total: " + totReduced);
var totReducedMul = reducir(arreglo, 1, function (acum, elem) {
    return acum * elem;
});
console.log("Total Mult: " + totReducedMul);
var totReducedConc = reducir(["Uno", "Dos", "Tres", "Cuatro"], "", function (acum, elem) {
    return acum + elem;
});
console.log("Total Concat: " + totReducedConc);
function reducir(arrIn, initVal, redOper) {
    var redTot = initVal;
    for (var _i = 0, arrIn_3 = arrIn; _i < arrIn_3.length; _i++) {
        var el = arrIn_3[_i];
        redTot = redOper(redTot, el);
    }
    return redTot;
}
/////////////////////////////////////
/*filter cadenas*/
console.log("Filtro cadenas: " + ["Uno", "Dos", "Tres"].filter(function (elemento) {
    return elemento == "Dos";
}));
/*map cadenas*/
console.log("Map cadenas long: " + ["Uno", "Dos", "Tres"].map(function (elemento) {
    return elemento.length;
}));
/*reduce cadenas*/
console.log("reduce mult: " + arreglo.reduce(function (acum, elemento) {
    return acum *= elemento;
}));
/*Conbinado*/
console.log("Combinado: " + ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez"].map(function (elemento) {
    return elemento.length;
}).filter(function (elemFil) {
    return elemFil % 2 == 0;
}).reduce(function (acm, elemRed) {
    return acm + elemRed;
}));
