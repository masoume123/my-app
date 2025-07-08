
import "./App.css"


import routes from "./routes"
import {useRoutes} from 'react-router-dom'
import Topbar from "./commponent/topBare/topbar"
import Sidebar from './commponent/sideBar/sidebar'


function App() {
  let routers = useRoutes(routes)

  return (
    <>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        {routers}
      </div>
      
    </>
  )
}

export default App
