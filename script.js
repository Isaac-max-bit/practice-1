// alert('Hola Isaac, Es hora de practicar')

// let num = [1,5,3,6,2,8,9,10,20,4,5,6]
// if(num[0] == 1){
//     console.log('Numeros iguales')
// }

// switch(num[4]){
//     case 2:
//         console.log("El numero es el: " + num[2]);
//         break;
//     case 7: 
//        console.log("El numero es el: " + num[5]);
//        break;
//        default:     
// }

// function unaFuncion(){
//     console.log('Esto es una funcion')
// }
// let numeros = [1,5,'caso',unaFuncion,2,8,9,10,20,4,5,6]
// if(numeros[0] == 1){
//     console.log('Numeros iguales')
// }
// numeros[3]()
// switch (numeros[2]) {
//     case 9:
//         break;
//     case 'caso':
//         console.log('Esta es la posición 2')
//         break; 
//     default:
//         break;
// }
// console.log(unaFuncion)
// unaFuncion()

// let num = [1,2,3,4,5,6,7,8,9]


// for(let index = 0; index < 9; index++){
//     if(num[index] % 2 == 0){
//         console.log('El numero: ' + num[index] + ' es un número par')
//     }
// }


// let estudiantes = ['Lina', 'Paola', 'carol', 'Emanuel','David','Mateo']
// for(let i = 0; i < 6; i++){
//     let estudiante = prompt("Ingrese el nombre del estudiante: ")
//     if(estudiante == estudiantes[i]){
//         console.log('El estudiante ' + estudiante + ' existe en la base de datos')
//     }
// }

// let estudiantes = ['Lina', 'Paola', 'Carol', 'Emanuel', 'David', 'Mateo'];
// for (let i = 0; i < estudiantes.length; i++) {
//     let estudiante = prompt("Ingrese el nombre del estudiante: ");
//     if (estudiante.toLowerCase() === estudiantes[i].toLowerCase()) {
//         console.log('El estudiante ' + estudiante + ' existe en la base de datos');
//     }
// }


// alert('Bienvenido Isaac')

// let personas = ['Camila', 'Luisa','Felipe','Ana','Tomas','Andrea']
// let edades = [17, 22, 35, 15, 23, 18]
// for(let index = 0; index < 6; index++){
//     if(edades[index] >= 18){
//         console.log('La persona ' + personas[index] + ' tiene ' + edades[index] + ' años')
//     }
// }


// let personas = []
// let edades = []
// for(let i = 0; i < 5; i++){
//     let persona = prompt('Ingresa el nombre de la persona: '); 
//     let edad = prompt('Ingresa la edad de la persona: ');
//     personas[i] = persona
//     edades[i] = edad

// }

// for(let i = 0; i < 5; i++){
//     if(edades[i] >= 15){
//         console.log('La persona ' +personas[i] + ' tiene '+ edades[i] + ' años');
//     }
// }

// let nombres = ['Andrea']
// console.log(nombres)
// nombres.push('Jaime')
// nombres.push('Luisa')
// nombres.push('Camila')
// console.log(nombres)
// nombres.unshift('Camilo')
// nombres.unshift('Karen')
// console.log(nombres)
// nombres.pop()
// nombres.pop()
// console.log(nombres)
// nombres.shift()
// console.log(nombres)


// let num = [1,2,3,4,5,6,7,8,9]
// num.splice(0,2)
// console.log(num)
// num.splice(3, 1)
// console.log(num)



// const arrayConstructor = new Array(10 , 1);
// console.log(arrayConstructor)

// const arrayOF = Array.of(10);
// console.log("Array OF: " + arrayOF);

// const arrayFrom = Array.from("String");
// console.log(arrayFrom);


// let num = [1, 2, 3, 4, 5, 6, 7, 8]

// num.map(function(numero){
//     console.log(numero * 4)
//     if(numero % 2 == 0){
//         console.log("El numero es par ")
//     }
// })


// num.map((numero)=>{
//     console.log(numero)
// })


// let num = [1, 2, 3, 4, 5, 6, 7, 8]

// let numerosPares =  num.map(function(numero){
//     return numero * 4
//     // console.log(numero * 4)
//     // if(numero % 2 == 0){
//     //     return numero 
//     // }
// })

// console.log(numerosPares)
// console.log(num)

// let nombres = ['Ana', 'Camila', 'Andrea', 'Felipe'];
// let nombresCompletos = nombres.map((nombre) => {
//     return nombre + ' Zapata';
// });

// console.log(nombresCompletos);



// let nombres = ['Luisa','Camila','Ana','Luisa','Miguel',
//     'Adriana','Mateo','Felipe','Camila']

// let nombreTeclado = prompt('Ingrese el nombre a buscar: ')

//     let nombresNuevos = nombres.filter((nombre)=>{
//         if(nombre == nombreTeclado) {
//             return nombre
//         }
            
//     })

//     console.log(nombresNuevos)


// let nombres = ['Luisa','Camila','Ana','Luisa','Miguel',
//     'Adriana','Mateo','Felipe','Camila']

// let nombreNuevo  = nombres.find((nombre) => {
//     if(nombre == 'Ana'){
//         return nombre
//     }
// })

// console.log(nombreNuevo)



// let nombres = ['Luisa','Camila','Ana','Luisa','Miguel',
//     'Adriana','Mateo','Felipe','Camila']

// let nombreNuevo  = nombres.filter((nombre) => {
//     if(nombre == 'Ana'){
//         return nombre
//     }
// })

// console.log(nombreNuevo)

// let objetoUno = { /* Objeto literal*/
//     "nombre": 'Jaime',
//     "id": 1013045633
// }; 

// let objetoDos = { /* Objeto literal*/
//     "nombre": 'Isaac',
//     "id": 1018223501
// };

// let nuevoArreglo = [objetoUno, 'Ana', objetoDos, 'Luisa'];

// for(let index = 0; index < nuevoArreglo.length; index++){
//     if(nuevoArreglo[index].id === 1013045633){  // Cambié aquí a "===" para comparar correctamente
//         console.log('Encontrado:', nuevoArreglo[index]);
//     }
// }


// let persona = {
//     "nombre": 'Isaac Garcia',
//     "edad": 20,
//     "profesion": 'developer',
//     "direccion": {
//         "calle": 18,
//         "carrera": 45,
//         "barrio": "castilla"
//     },
//     "hobbies": ['caminar', 'escuchar musica','jugar videojuegos', 'leer']
// }

// let personaDos = {
//     "nombre": 'Camilo Giraldo',
//     "edad": 47,
//     "profesion": 'contador',
//     "direccion": {
//         "calle": 33,
//         "carrera": 49,
//         "barrio": "Niquia"
//     },
//     "hobbies": ['caminar', 'escuchar musica']
// }

// console.log(persona)
// console.log(personaDos)


function Persona(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
}

let nuevoObjetoUno = new Persona('Isaac', 20, 'ING sistemas');
let nuevoObjetoDos = new Persona('Camilo', 47, 'ING software');

console.log(nuevoObjetoUno, nuevoObjetoDos);



let persona = {
    "nombre" : 'Isaac',
    "edad" : '20',
    "profesion" : 'UX/UI',
}

let personaDos = {
    "nombre" : 'Camilo',
    "edad" : '47',
    "profesion" : 'UX/UI',
}

console.log(persona, personaDos)