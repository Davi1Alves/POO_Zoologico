class Mamiferos {
    nome
    sexo
    idade

    constructor(nome, sexo, idade = 1){
        this.nome = nome;
        this.sexo = sexo;
    }
    emitirSom(){
        console.log(`Mamifero é uma classe abistrata, não é possivel emitir som`);
    }
};

export default Mamiferos;