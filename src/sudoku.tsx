import sudoku from './Sudoku.scss'
import image from './image.png'
import { Fragment, useState } from 'react'

const sum = Array.from({ length: 9 }, (v, k) => k)

function SudokuItem() {
  const [count, setCounts] = useState('')
  const onChange = (e: any) => {
    setCounts(e.target.value)
  }

  const item = sum.map(s => (
    <div className={sudoku.item} key={s}>
      {' '}
    </div>
  ))
  return (
    <Fragment>
      {/* <img src={image} /> */}
      {/* <div className={sudoku.sudoku}>{item}</div> */}
      <h1>webpack</h1>
      <div>
        <p>受控组件</p>
        <input type='text' value={count} onChange={onChange} />
        <br />
        <p>非受控组件</p>
        <input type='text' />
      </div>
    </Fragment>
  )
}

export default SudokuItem
