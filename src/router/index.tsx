import { lazy, ReactElement, startTransition, Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import Result404 from '@/home/404'

function Loading() {
  return <h2>🌀 Loading...</h2>
}

const Home = lazy(() => import('@/home'))
const About = lazy(() => import('@/about'))
const App = lazy(() => import('@/app'))
const Main = lazy(() => import('@/main'))

function withSuspence(comp: ReactElement) {
  return <Suspense fallback={<Loading></Loading>}>{comp}</Suspense>
}
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/home'}></Navigate>
  },
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: 'app',
        element: withSuspence(<App />)
      },
      {
        path: 'home',
        element: withSuspence(<Home />)
      },
      {
        path: 'about',
        element: withSuspence(<About />)
      }
    ]
  },
  {
    path: '*',
    element: <Result404 />
  }
]

export default routes
