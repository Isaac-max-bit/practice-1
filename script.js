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


alert('Bienvenido Isaac')

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


let num = [1,2,3,4,5,6,7,8,9]
num.splice(0,2)
console.log(num)
num.splice(3, 1)
console.log(num)