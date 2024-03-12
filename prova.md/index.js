import { criarPilha, inserirItem, retirarItem, procurarNaPilha } from "./pilha.js";

let alunos = [
    {
        titulo: "Dom Casmurro",
        paginas: 300,
        genero: "clássico",
    },
    {
        titulo: "IT a coisa",
        paginas: 150,
        genero: "terror",
    },
    {
        titulo: "Jason",
        paginas: 70,
        genero: "terror",
    },
    {
        titulo: "Chapéuzinho Vermelho",
        paginas: 10,
        genero: "clássico",
    },
    {
        titulo: "Histórinhas de terror para crianãs",
        paginas: 50,
        genero: "clássico",
    },
]

    console.log("Meu arquivo index.js")
    const pilha = criarPilha(3)
    console.log(pilha)
    inserirItem( pilha, {
        titulo: "Dom Casmurro",
        paginas: 300,
        genero: "clássico",

        titulo: "IT a coisa",
        paginas: 150,
        genero: "terror",

        titulo: "Jason",
        paginas: 70,
        genero: "terror",
    })

    retirarItem( pilha,{
        titulo: "Dom Casmurro",
        paginas: 300,
        genero: "clássico",

        titulo: "IT a coisa",
        paginas: 150,
        genero: "terror",

        titulo: "Jason",
        paginas: 70,
        genero: "terror",
    })

    procurarNaPilha( pilha, {
        titulo: "Dom Casmurro",
        paginas: 300,
        genero: "clássico",

        titulo: "IT a coisa",
        paginas: 150,
        genero: "terror",

        titulo: "Jason",
        paginas: 70,
        genero: "terror",
    })