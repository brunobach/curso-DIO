/*
Padroes mais utilizados

- Factory
- Observer
- Singleton
- Decorator
- Module

 
*/

// --- >  Factory < --- 

function Pessoa(...props){
    return  {
        name : 'Bruno',
        lastName: 'Bach',
    }
}

const exampleFactory = Pessoa({name: 'ssasd', lastName: 'Bach'})  
//console.log(exampleFactory) // { name: 'Bruno', lastName: 'Bach' }

// --- >  Singleton < --- 


// --- >  Decorator < ---

let loggedIn = false;

function callIfAuthenticated(fn){
    return !!loggedIn && fn()
}

function sum(a, b){
    return a + b
}

//console.log(callIfAuthenticated(() => sum(2,3))); // false
loggedIn = true;
//console.log(callIfAuthenticated(() => sum(2,3))); // 5

// --- >  Observer < ---

class Observable {
    constructor(){
        this.observables = []
    }

    subscribe(fn){
        this.observables.push(fn)
    }
    notify(data){
        this.observables.map(fn => fn(data))
    }
    unsubscribe(fn){
        this.observables = this.observables.filter(obs => obs !== fn)
    }
}

const obs = new Observable();

const logData = data => console.log(`Subscribe 1: ${data}`)

obs.subscribe(logData)

obs.notify(['Bruno', 225])