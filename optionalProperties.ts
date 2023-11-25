const nodeCrypto = require('crypto');

//Declaramos un tipo llamado HeroId
type HeroId = `${string}-${string}-${string}-${string}-${string}`
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' //Union Types

type Heroe = { // !! Importante !! siempre se empieza en mayusculas
    readonly id?: HeroId // readonly evita que el id (que es opcional) no pueda ser cambiado
    name: string,
    age: number
    isActive?: boolean // '?' para que la propiedad es opcional, es decir que si esta es de tipo booleano, pero si no, no hay problema
    powerScale?: HeroPowerScale
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
thor.powerScale = 'local'

console.log(thor);
