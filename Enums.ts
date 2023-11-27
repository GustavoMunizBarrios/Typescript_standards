/*  En JS:

const ERROR_TYPES = {
    NOT_FOUND: 'notFound',
    UNAUTHORIZED: 'unauthorized',
    FORBIDDEN: 'forbidden'
}

function mostrarMensaje (tipoDeError) {
    if (tipoDeError == ERROR_TYPES.NOT_FOUND) {
        console.log('No se encuentra el recurso')
    } else if (tipoDeError == ERROR_TYPES.UNAUTHORIZED) {
        console.log('No tienes permiso para acceder')
    } else if (tipoDeError == ERROR_TYPES.FORBIDDEN) {
        console.log('No tienes permisos para acceder')
    }
}
*/
// En TypeScript, lo mejor sería que usasemos Enums:

const enum ERROR_TYPES {
    NOT_FOUND,
    UNAUTHORIZED,
    FORBIDDEN
}
function mostrarMensaje (tipoDeError:ERROR_TYPES) {
    if (tipoDeError == ERROR_TYPES.NOT_FOUND) {
        console.log('No se encuentra el recurso')
    } else if (tipoDeError == ERROR_TYPES.UNAUTHORIZED) {
        console.log('No tienes permiso para acceder')
    } else if (tipoDeError == ERROR_TYPES.FORBIDDEN) {
        console.log('No tienes permisos para acceder')
    }
}