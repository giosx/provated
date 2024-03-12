export function criarPilha(tamanhoDaPilha = 5) {
    return [...new Array(tamanhoDaPilha)]
}

export function inserirItem(pilha, item) {
    const spacePosition = pilha.indexOf(undefined)
        if(spacePosition === -1) {
            console.log('Não tem espaço')
            return
        } 
        pilha[spacePosition] = item
}

export function retirarItem(pilha) {
    if(pilha[0] === undefined)
        console.log('Pilha vazia')
        return
}

    const lastItemPosition = pilha.indexOf(undefined)
    const selectItem = pilha[lastItemPosition -1]
    if(lastItemPosition === -1){
        pilha.pop()
        return
}        
    pilha.splice(lastItemPosition -1, 1, undefined)
        return selectItem

     export function procurarNaPilha(pilha, item) {
        for (let i = 0; i < pilha.length; i++){
            if (pilha[i].genero === item.genero)
            console.log("Achei o livro" + item.titulo)
        return
        }
     }   
     console.log("Não achei o livro" + item.titulo)

     export function estaVazia(pilha){
        if(pilha[0] === undefined){
            console.log("Está vazia")
            return true
        }
        return false
     }