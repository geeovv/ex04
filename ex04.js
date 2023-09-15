
class Personagem {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
    apresentar() {
      console.log(`meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
  }

class PersonagemPrincipal extends Personagem {
    constructor(nome, idade, papel) {
      super(nome, idade);
      this.papel = papel;
    }
    agir() {
      console.log(`como ${this.papel} em Gossip Girl, estou causando muito drama.`);
    }
  }
  const serena = new Personagem('serena van der woodsen', 27);
  const blair = new PersonagemPrincipal('blair waldorf', 28, 'a queen B');
  
  serena.apresentar(); 
  blair.apresentar();  
  blair.agir();   
  