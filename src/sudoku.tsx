import sudoku from './Sudoku.scss'

const sum = Array.from({ length: 9 }, (v, k) => k)

function SudokuItem() {

    const item = sum.map(s =>
        <div className={sudoku.item} key={s}>  </div>)
    return <div className={sudoku.sudoku
    }>{item}</div>
}

export default SudokuItem