//------------------------------------------------------------------------------------------------------
// Esta forma es incorrecta, ya que tiene any implicito en las varibles (name, age) del objeto
/* 
function saludar({ name, age}) {
    console.log(`Hola ${name}, tienes ${age} años`);
} */
//----------------------------------------------------------------------------------------------------
//Forma correcta:

function saludar({ name, age }: {name:string, age:number}) {
    console.log(`Hola ${name}, tienes ${age} años`);
}
//-----------------------------------------------------------------------------------------------------
// Si se requiere especificar el tipo de dato que devuelve la función se hace asi:

function saludo({ name, age }: {name:string, age:number}): number {//el tipo de dato que devuelve es number
    console.log(`Hola ${name}, tienes ${age} años`)
    return age
}

