/* 
El “narrowing” en TypeScript es un proceso que se utiliza para refinar los tipos de datos a tipos más 
específicos1. Este proceso se realiza a través de constructos de control de flujo de JavaScript como 
if/else, ternarios condicionales, bucles, verificaciones de veracidad, etc., que pueden afectar esos 
tipos
*/

function mostrarLongitud (objeto: number | string) {
    if (typeof objeto === 'string') { // si el objeto es un string realiza esto:
        return console.log(objeto.length);
        
    }
    return console.log(objeto.toString().length );
    // Si el objeto es u number, lo convierte a string y retorna la longitud

}

mostrarLongitud(345678)