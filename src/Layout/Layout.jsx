import { Link, NavLink } from 'react-router-dom'
import Footer from '../Footer/Footer'
import MobileFooter from '../Footer/MobileFooter'
import Navbar from '../Navbar/Navbar'
import { MdCancel } from 'react-icons/md'
import { useContext, useEffect, useMemo, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { BsCollectionPlayFill } from 'react-icons/bs'
import { TiContacts } from 'react-icons/ti'
import {
  FaFacebook,
  FaInfoCircle,
  FaInstagram,
  FaTiktok,
  FaUserCircle,
  FaWhatsapp
} from 'react-icons/fa'
import { FaHeartCircleCheck, FaXTwitter } from 'react-icons/fa6'
import MovieContext from '../Context/FinContext'
import { TbTableDashed } from 'react-icons/tb'

const Layout = ({ children }) => {
  const { FavouriteCount } = useContext(MovieContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchResult, setSearchResult] = useState([])
  const [Height, setHeight] = useState(null)
  const [Text, setText] = useState('')
  const hover = 'hover:text-subMain transi text-white relative'
  const Hover = ({ isActive }) => (isActive ? 'text-subMain' : hover)
  const textArray = useMemo(() => ['Search Movie Name Here'], [])
  const User = JSON.parse(localStorage.getItem('userInfo'))

  const socials = [
    {
      path: `#`,
      icon: <FaWhatsapp className='h-7 w-7' />
    },
    {
      path: `#`,
      icon: <FaFacebook className='h-7 w-7' />
    },
    {
      path: `#`,
      icon: <FaXTwitter className='h-7 w-7' />
    },
    {
      path: `#`, // Instagram doesn't have a native share URL for web
      icon: <FaInstagram className='h-7 w-7' />
    },
    {
      path: `#`, // TikTok might not support direct sharing via URL
      icon: <FaTiktok className='h-7 w-7' />
    }
  ]

  return (
    <>
      <div className='bg-main text-white relative'>
        

        <Navbar searchResult={searchResult} Text={Text} />

        <div
          className={` ${
            searchResult && searchResult.length > 0 ? '' : 'hidden'
          } fixed w-full top-26 z-50 left-0 flex flex-col gap-5 bg-main text-white p-5  overflow-y-auto`}
        >
          {searchResult &&
            searchResult.map((movie, i) => (
              <Link to={`/movie/${movie.id}`} className='font-semibold'>
                {movie.name}
              </Link>
            ))}
          {/* <p className="text-subMain font-semibold text-2xl">Testing</p> */}
        </div>
        {children}

        <Footer />
        {/* Mobile Footer */}
      
      </div>
    </>
  )
}

export default Layout
