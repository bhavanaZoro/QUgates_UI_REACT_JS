import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify"
import Nav from "./components/Navbar/Nav"
import Home from "./components/Navbar/Home"
import About from "./components/Navbar/About"
import Hiring from "./components/Navbar/Hiring"
import Profile from "./components/Navbar/Profile"
const App = () => {
  return (
    <>
    <Router>
           <ToastContainer />
           <Nav/>
           <Routes>
            <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/hiring' element={<Hiring/>}/>
              <Route path='/profile' element={<Profile/>}/>
           </Routes>
    </Router>
    </>
  )
}

export default App
