// Heranças
    /*A herança no JavaScript é baseada em protótipos, por isso se vê muito a variavel "prototype". 
    O prototype é uma variavel que armazena as definições do objeto.  Todas as vezes que uma variavel 
    no Javascript é criada, ela terá essa referência: "__proto__"; que aponta para o prototype do tipo que foi criado
    Esse tipo é chamado de "constructor". Basedo em um constructor é criado um prototype e nessa variável 
    é armazenado a referÊncia do __proto__     */

const myText = String('hello prototype');

// Quando uma função construtora é criada ela permite que se escreva no prototype, lembrando que o prototype contém a definição do objeto criado 
function Animal() {}

Animal.prototype.qtdPatas = 0;
Animal.prototype.movimentar = function() {} 

function Cachorro(morde) {
    this.qtdPatas = 4;
    this.morde = morde;
} 

Cachorro.prototype = Object.create(Animal); // quando o prototype de cachorro é criado eu defino que ele é derivado do prototype de Animal 
Cachorro.prototype.latir = function () {
    console.log('Au! Au!')
}
const cachorro = new Animal();

console.log(cachorro.__proto__ == Animal.prototype );

console.log(Animal.prototype === Function.prototype);

console.log( cachorro instanceof Animal);

console.log(cachorro instanceof Function);

/*function Animal (qtdPatas){
    this.qtdPatas = qtdPatas;
    this.movimentar = function () {}
}
function Cachorro (morde){
    Animal.call(this, 4);

    this.morde = morde;
    this.latir = function () {
        console.log('Au! Au!');
    }
}    a função call perite que seja passado um contexto para a função ser executada */
const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug)
//O PROTOTYPE é um recurso muito poderoso por isso é importante ter cuidado 
//pois é possivel mudar a implementação de um tipo nativo(não recomendado), 
//o ideal é que se crie as prorias definições e implementações.

// Classe
    /* É uma simplificação da herança de protótipos; 
    sempre é usado com a palavra-chave class  */
class Animal{
    constructor(){
        this.qtdPatas = 0;
    }   
    movimentar() {}
}
class Cachorro extends Animal{
    constructor(morde) {
        super();
        this.qtdPatas = 4;
        this.morde = morde;
    }
    latir() {
        console.log('Au! Au!');
    }
}
 
/*const pug =  new Cachorro (false);
const pitbull = new Cachorro (true);*/


// Modificadores de Acesso
    /* o JavaScript atualmente não possui Modificadores de Acesso, e os  Browsers ainda não conseguem ler;
    Mas é o controle daquilo que é público ou privado dentro do Classe.


    */
class Person {
    #name = '';

    constructor(initialName){
        this.#name = initialName;
    }
    setName(name){
        this.#name = name;
    }

    getName(){
        return this.#name;
    }
}
// o identificador dos modificadores de acesso é o serquilha "#"


// Encapsulamento
    /* Serve para ocultar detalhes do funcionamento interno  */

// Static

    /* permite acessar metodos e atributos sem instanciar determinada classe */

class Person {
    static walk(){
        console.log('walking...');
    }
}

console.log(Person.walk());