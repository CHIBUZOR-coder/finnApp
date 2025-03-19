import { Outlet } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'aos'
import 'aos/dist/aos.css'
import Navbar from './Navbar/Navbar'
import MovieContext, { FinProvider} from './Context/FinContext'
import { useContext } from 'react'

function App () {
  return (
    <>
      <FinProvider>
        <div>
          <Outlet />
        </div>
      </FinProvider>
    </>
  )
}

export default App
