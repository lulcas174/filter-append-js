let arrayObj = [
    {"nome": "Lucas lima","idade": 20},
    {"nome": "Ma","idade": 21},
    {"nome": "Lu","idade": 30},
    {"nome": "LucasSpo","idade": 40}
]
// console.log(arrayObj)

let array = [];
arrayObj.filter(values => {
    if (values.idade > 30) {
        array = values
        console.log(array)
    }
})