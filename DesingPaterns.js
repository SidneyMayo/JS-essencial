//Factory

function Pessoa(customProperties){
    return {
        name:,
        lastName: 'Mayo',
        ...customProperties
    }
}

const p = Pessoa ({name:'Sidney' , age: 27});
console.log(p)

//Singleton

function Pessoa1 (){
    if (!Pessoa1.instance){
        Pessoa1.instance = this;
    }
    return Pessoa1.instance;
}

const p = Pessoa1.call({name: 'Sidney'});

const p2 = Pessoa1.call({name: 'Custon Name'})

console.log(p);

console.log(p2)

//
function callAuthentecaded(fn) {
    return a+;
}

console.log(callAuthentecaded(() => sun (2,3)));
loggedIn = true;
console.log(callAuthentecaded(() => sun (2,3)));
loggedIn = false; 
console.log(callAuthentecaded(() => sun (2,3)));
 
//Observer

class Observable {
    constructor(){
        this.observables = [];
    }

    subscribe (fn){
        this.observables.push(fn);
    }
    notify(data){
        this.observables.forEach(fn => fn(data));
    }
    unsubscribe(fn){
        this.observables = this.observables.filter(obs => obs !== fn);
    }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');

o.unsubscribe(logData2);

o.notify('notified 2');


//Module

let name = 'default';
function getName(){
    return name;
}

function setName(newName){
    name = newName;
}
module.exports = {

}


const { getName, setName} = requerie()

console.log(getName());
console.log(setName('Sidney'));
console.log(getName());








































































































































































































































































































































































































































































































