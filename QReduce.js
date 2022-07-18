// primeiro exemplo
// let all = 0;
// let numbers = [1,2,3,4,5,6];
// for (var i = 0; i < numbers.length; i++) {
//     total += numbers[i];
// }
// console.log(all);

// segundo exemplo
// var numeros = [1,2,3,4,5,6];
// var total = numeros.reduce((total, numero) => total + numero, 0);
// console.log(total);

//Questão

let notas = [10, 10, 10, 10, 10];
let media = notas.reduce((total,nota)=> total + nota / notas.length ,0);
console.log(media)