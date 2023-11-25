
const languages: string[] = [] // Aqui le decimos que queremos trabajar con array de strings

languages.push('JavaScript')
console.log(languages);

//_________________________________________________________________

// Si se requiere que los tipos de datos del array sean mixtos (ej. strings y numbers) entonces:

const mixArray: (string | number)[] = []
mixArray.push('cadena')
mixArray.push(56)

console.log(mixArray);
