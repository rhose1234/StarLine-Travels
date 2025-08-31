
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/homepage'
import Footer from './Components/footer'
// import About from './Pages/about'

function App() {


  return (
    <>
<Navbar/>
    <Routes>
      <Route path='/' index element={<Homepage/>} />
      {/* <Route path='/about' element={<About/>} /> */}
    </Routes>
 <Footer/>   
  
    </>
  )
}

export default App
