import sudoku from './Sudoku.scss'
import image from './image.png'
import { Fragment } from 'react'

const sum = Array.from({ length: 9 }, (v, k) => k)

function SudokuItem() {

    const item = sum.map(s =>
        <div className={sudoku.item} key={s}>  </div>)
    return <Fragment>
        <img src={image} />
        <div className={sudoku.sudoku}>{item}</div>
    </Fragment>

}

export default SudokuItem