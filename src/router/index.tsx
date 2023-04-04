import { lazy, ReactElement, Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

function Loading() {
  return <h2>🌀 Loading...</h2>
}

const Home = lazy(() => import('@/home'))
const About = lazy(() => import('@/about'))
const App = lazy(() => import('@/app'))

function withUseRoutes(comp: ReactElement) {
  return <Suspense fallback={<Loading></Loading>}>{comp}</Suspense>
}
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/app'}></Navigate>
  },
  {
    path: 'app',
    element: withUseRoutes(<App />)
  },
  {
    path: 'home',
    element: withUseRoutes(<Home />)
  },
  {
    path: 'about',
    element: withUseRoutes(<About />)
  }
]

export default routes
