let bookObject = [{
    "id": 1,
    "name": "Marry",
    "author": "Jeorge",
    "ageRelease": 2020
},
{   "id": 2,
    "name": "me",
    "author": "Rusti",
    "ageRelease": 2010
},
{   "id": 3,
    "name": "archie",
    "author": "Bushin",
    "ageRelease": 1990
},
]

const readline = require("readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Qual livro você quer buscar? Busque pelo id ", function (answer) {
    bookObject.filter(values =>  {
        if (values.id === parseInt(answer)) {
            console.log(JSON.stringify(values));
        }
    });
  input.close();
});

