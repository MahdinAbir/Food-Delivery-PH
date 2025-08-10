
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify'


function App() {
 

  return (
    <>
      <div className='flex flex-col min-h-screen ' >



      <div className='pt-10' >  <Navbar> </Navbar> </div>
      
      <div className='flex-grow' > <Outlet></Outlet>   </div>

      
      <Footer></Footer>
      


      </div>
      
    </>
  )
}

export default App
