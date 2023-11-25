const eCrypto = require('crypto');

//Declaramos un tipo llamado HeroId
type HeroeId = `${string}-${string}-${string}-${string}-${string}`
type HeroePowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' //Union Types

type HeroBasicInfo = {
    name: string,
    age: number
}
type HeroProperties = { // !! Importante !! siempre se empieza en mayusculas
    readonly id?: HeroeId, // readonly evita que el id (que es opcional) no pueda ser cambiado
    isActive?: boolean, // '?' para que la propiedad es opcional, es decir que si esta es de tipo booleano, pero si no, no hay problema
    powerScale?: HeroePowerScale
}
type Heroe_ = HeroBasicInfo & HeroProperties //Insertion Types // este es un tipo con las propiedades de HeroBasicInfo y de HeroProperties

/* let hero: Heroe = {
    name: 'Iron Man',
    age: 46
} */
 
function create_Hero(info: HeroBasicInfo): Heroe_ { //En las propiedades que estamos pasando como parametros {name,age} les pasamos el tipo de HeroBasicInfo
    const {name, age} = info
    return { 
        id: eCrypto.randomUUID(), 
        name,
        age, 
        isActive: true
    }
}

const IronMan = create_Hero({ name: 'Iron Man', age: 45})
IronMan.powerScale = 'local'

console.log(IronMan);
