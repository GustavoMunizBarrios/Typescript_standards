// Type Alias
/* En TypeScript, un alias de tipo es una forma de crear un nuevo nombre para un tipo 
existente. No define un nuevo tipo, sino que proporciona un nombre alternativo para un 
tipo existente. */

type Hero = { // !! Importante !! siempre se empieza en mayusculas
    name: string,
    age: number
}

const Thor: Hero = {
    name: 'thor',
    age: 1500
}

console.log(Thor);

