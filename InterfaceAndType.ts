interface Sonic {
    company: string,
    nombre: string,
    correr: () => void
}
interface Mario {
    company: string,
    nombre: string,
    saltar: () => void
}

type Personaje = Mario | Sonic

function jugar(personaje: Personaje) {
    console.log(personaje.nombre);
    
}