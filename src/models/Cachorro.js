import Mamiferos from "./mamiferos.js";

class Cachorro extends Mamiferos {

    constructor(nome, sexo){
        super(nome, sexo);
    }

    emitirSom(){
        console.log(`${this.nome} fez au au!`);
    }

    sentar(){
        console.log(`${this.nome} sentou ao seu lado`);
    }
};

export default Cachorro;