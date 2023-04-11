import { createRoot } from 'react-dom/client'
// import App from './app'
// import TaskApp from './demo1/demo1'
import { BrowserRouter, useRoutes } from 'react-router-dom'

// import SudokuItem from './sudoku'
import 'normalize.css'
import routes from './router'

function APP() {
  const element = useRoutes(routes)
  return <>{element}</>
}
const root = document.getElementById('root')
if (root)
  createRoot(root).render(
    <BrowserRouter>
      <APP></APP>
    </BrowserRouter>
  )
