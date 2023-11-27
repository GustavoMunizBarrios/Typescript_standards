const canvas = document.getElementById('canvas')
// La constante canvas será null si no lo encuentra y será HTMLElement si lo encuentra

// Pero como sabe TypeScript que realmente estas recuperando un elemento <canvas /> ???

//Esto es Inferencia --> Typescript se da cuenta que dentro del if ya solo el canvas va a poder ser un HTMLCanvasElement  
if (canvas != null && canvas instanceof HTMLCanvasElement) {
    const ctx = canvas.getContext('2d')
}

//typeof --> para tipos (strings, booleans, numbers)
//instanceof --> para instancias, para saber si es una fecha, una date etc.