import Mamiferos from "./mamiferos.js";

class Humano extends Mamiferos {
    

    constructor(nome, idade, sexo){
        super(nome, sexo);
        this.idade = idade;
    }

    emitirSom(){
        console.log(`Bom dia! meu nome é ${this.nome}! Eu sou o dono deste Zoologico! Tudo bem com você?`);
    }

    mortalPraTras(){
        console.log(`${this.nome} deu um mortal pra trás`);
    }
};

export default Humano;