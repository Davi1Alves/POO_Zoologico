import Mamiferos from "./mamiferos.js";

class Gato extends Mamiferos {
    
    constructor(nome,sexo){
        super(nome, sexo);
    }

    emitirSom(){
        console.log(`${this.nome} fez Miau!`);
    }

    subirNaArvore(){
        console.log(`${this.nome} subiu na Arvore`);
    }
};

export default Gato;