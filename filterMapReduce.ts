/*Filter, map, reduce*/
var arreglo = [2,5,7,9];
var arregloPares = filtrarPares(arreglo);

function filtrarPares(fullArr){
  var inArr = [];
  for(let elemento of fullArr){
    if(elemento%2==0){
      inArr.push(elemento);
    }
  }
  return inArr;
}




arregloPares=filtrar((elemento)=>
  {
    return elemento % 2 != 0;
  }
);
for(let elemento of arregloPares)
{
  console.log(elemento);
}


/*----------------Filter , con el uso de un callback----------*/

function filtrar(callback)
{
  var filtrados=[];
  for(let elemento of arreglo)
    {
    if(callback(elemento))
       {
        filtrados.push(elemento);
      }
    }
 return filtrados;
}

var suma = function(a,b){
  return a + b;
}

var mult = function(a,b){
  return a * b;
}

var div = function(a,b){
  return a / b;
}

var x = ejecutarFuncion(suma,6,7);

var y = ejecutarFuncion(mult,4,5);

var z = ejecutarFuncion(div,20,4);

console.log("x = " + x);
console.log("y = " + y);
console.log("z = " + z);

function ejecutarFuncion(oper,a,b){
  return oper(a,b);
}


///////////////////////////////////////////////
var arregloAlCuadrado = elevarAlCuadrado([2,5,7,9]);
console.log("arregloAlCuadrado:"+arregloAlCuadrado);
//4,25,49,81
function elevarAlCuadrado(arrIn:number[]){
  let arrSr:number[] = [];
    for(let elem of arrIn){
      arrSr.push(Math.pow(elem, 2));
    }
    return arrSr;
}
//////////////////////////////////////////////////////
var arregloAlCuadrado2 = mapear([2,5,7,9],(elemento)=>{
    return Math.pow(elemento,2);
});
console.log("arregloAlCuadrado2:"+arregloAlCuadrado2);
//4,25,49,81
function mapear(arrIn,oper){
    for(let elem in arrIn){
      arrIn[elem] = oper(arrIn[elem]);
    }
    return arrIn;
}

//////////////////////////////////////////

var longs = mapear(["Uno","Dos","Tres","Cuatro"],(elemento)=>{
    return elemento.length ;
});
console.log("Longitudes: "+longs);

/////////////////////////////////
var total = calcularTotal(arreglo);

console.log("total: " + total);

function calcularTotal(arrIn){
  var total = 0;
  for(let el of arrIn){
    total += el;
  }
  return total;
}

/////////////////////////////////////
var totReduced = reducir(arreglo, 0, (acum,elem) => {
  return acum + elem;
});

console.log("Total: " + totReduced);

var totReducedMul = reducir(arreglo, 1, (acum,elem) => {
  return acum * elem;
});

console.log("Total Mult: " + totReducedMul);

var totReducedConc = reducir(["Uno","Dos","Tres","Cuatro"], "", (acum,elem) => {
  return acum + elem;
});

console.log("Total Concat: " + totReducedConc);

function reducir(arrIn, initVal, redOper ){
  var redTot = initVal;
  for(let el of arrIn){
    redTot = redOper(redTot,el);
  }
  return redTot;
}

/////////////////////////////////////
/*filter cadenas*/
console.log("Filtro cadenas: " + ["Uno","Dos","Tres"].filter((elemento)=>{
  return elemento == "Dos";
} ) );

/*map cadenas*/
console.log("Map cadenas long: " + ["Uno","Dos","Tres"].map((elemento)=>{
  return elemento.length;
} ) );

/*reduce cadenas*/
console.log("reduce mult: " + arreglo.reduce((acum,elemento)=>{
  return acum*=elemento;
} ) );


/*Combinado*/
console.log("Combinado: " + ["Uno","Dos","Tres","Cuatro","Cinco","Seis","Siete","Ocho","Nueve","Diez"].map((elemento)=>{
  return elemento.length;
} ).filter((elemFil) => {
  return elemFil % 2 == 0;
}).reduce((acm,elemRed) => {
  return acm + elemRed}) ) ;
