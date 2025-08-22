
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/homepage'

function App() {


  return (
    <>
<Navbar/>
    <Routes>
      <Route path='/' index element={<Homepage/>} />
    </Routes>
  
    </>
  )
}

export default App
