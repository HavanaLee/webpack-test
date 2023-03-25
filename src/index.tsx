import { createRoot } from 'react-dom/client'
import App from './app'
import SudokuItem from './sudoku'

const root = document.getElementById('root')
if (root) createRoot(root).render(<SudokuItem />)
