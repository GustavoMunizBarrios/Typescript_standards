const nodeCrypto = require('crypto');

//Declaramos un tipo llamado HeroId
type HeroId = `${string}-${string}-${string}-${string}-${string}`

type Heroe = { // !! Importante !! siempre se empieza en mayusculas
    readonly id?: HeroId // readonly evita que el id (que es opcional) no pueda ser cambiado
    name: string,
    age: number
    isActive?: boolean // Con '?' le estamos diciendo que la propiedad es opcional,
                       // es decir que si esta es de tipo booleano, pero si no, no hay problema
}

/* let hero: Heroe = {
    name: 'Iron Man',
    age: 46
} */

function createHero(hero: Heroe): Heroe {
    const {name, age} = hero
    return { 
        id: nodeCrypto.randomUUID(), 
        name,
         age, 
        isActive: true
    }
}

const thor = createHero({ name: 'Thor', age: 1500})
console.log(thor);
