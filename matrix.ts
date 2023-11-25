
type CellValue = 'X' | 'O' | '' // se declara un type con string que pueden ser X, O o nada

type GameBoard = [ // Se declara un type que es una matriz de 3 x 3 en el cual cada elemento de esta será el type CellValue
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const gameBoard: GameBoard = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', '', 'O']
]

gameBoard[2][1] = 'X'
console.log(gameBoard);
