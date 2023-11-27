const API_URL = "https://api.github.com/search/repositories?q=javascript" //URL para buscar repositorios que esten relacionados con JavaScript
const response = await fetch(API_URL) // 'fetch' realiza una solicitud HTTP a la URL, fetch devuelve una promesa y 'await' espera que la promesa se resuelva. La respuesta se almacena en response

if (!response.ok) { // verifica si la propiedad 'ok' de la respuesta es 'true'
    throw new Error('Request failed') // si no es asi, se lanza un error con el mensaje "Request failed"
}

type APIResponse ={ // Se agrega un tipo que especifica que items es un array de objetos
    items: object[]
}

const data =await response.json() as APIResponse// Se utiliza el método json() de la respuesta para extraer y parsear el cuerpo de la respuesta como JSON

// Se utiliza el método map para iterar sobre la propiedad items del objeto data, que se espera que contenga la información de los repositorios. Para cada repositorio, se ejecuta una función de flecha que imprime el repositorio en la consola
const repos = data.items.map(repo => {
    console.log(repo);
})