import { Breadcrumb } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import routes from '@/router'

const breadcrumbNameMap: Record<string, string> = {}

function getRoutes(routes: RouteObject[]) {
  routes.forEach(e => {
    if (e.children?.length) getRoutes(e.children)
    else {
      const path: string = e.path!

      Object.assign(breadcrumbNameMap, { [`/${path}`]: path })
    }
  })
}
getRoutes(routes)

const Home = () => {
  const location = useLocation() // location对象
  const pathSnippets = location.pathname.split('/').filter(i => i) // 去掉'/'

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return {
      key: url,
      title: <Link to={url}>{breadcrumbNameMap[url]}</Link>
    }
  })

  const breadcrumbItems = [
    {
      title: <Link to='/'>Main</Link>,
      key: 'main'
    }
  ].concat(extraBreadcrumbItems)

  return (
    <div>
      {/* <div className='demo-nav'>
        <Link to='/'>Home</Link>
        <Link to='/apps'>Application List</Link>
      </div> */}
      {/* <Routes>
        <Route path='/apps' element={<Apps />} />
        <Route path='*' element={<span>Home Page</span>} />
      </Routes> */}
      <Breadcrumb items={breadcrumbItems} className='demo' />
    </div>
  )
}

export default Home
