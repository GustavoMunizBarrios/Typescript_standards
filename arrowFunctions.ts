//Forma incorrecta:
const sayHiFromFunction = (fn) => {
    fn('Gustavo')
}
sayHiFromFunction((name) => {
    console.log(`Hi ${name}`);
})
//------------------------------------------------------------------------------------------

//Forma correcta:
// Aqui le estamos diciendo que la función que se espera tiene un parámetro llamado name
// y que este recibe un tipo de dato string, y como la función no retorna nada se pone 
// void, pero reemplazar void por el tipo de dato correspondiente si es que la función 
// retorna un tipo de dato especifico
const sayHelloFromFunction = (fn: (name: string) => void) => {
    fn('Gustavo')
}
sayHelloFromFunction((name: string) => {
    console.log(`Hi ${name}`);
})
//------------------------------------------------------------------------------------------

//otros ejemplo de typeo de arrow funcions (las dos formas son validas):

const sumar = (a: number, b: number): number => {
    return a + b
}

const restar: (a:number, b:number) => number = (a, b) => {
    return a - b
}




