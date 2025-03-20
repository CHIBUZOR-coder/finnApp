import { useContext, useEffect, useState } from 'react'
import { BsCollectionPlayFill, BsFillSearchHeartFill } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa'
import { FaHeartCircleCheck } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'
import MovieContext from '../Context/FinContext'
import { FaInfoCircle } from 'react-icons/fa'
import { TiContacts } from 'react-icons/ti'
import { TbTableDashed } from 'react-icons/tb'
import { use } from 'react'
import { MdArrowDropDown, MdOutlineCancel } from 'react-icons/md'
import { GoArrowUpRight } from 'react-icons/go'
import { LuSquareMenu } from 'react-icons/lu'
import { GiCancel } from 'react-icons/gi'

const Navbar = ({ Text }) => {
  const { FavouriteCount, logDetail } = useContext(MovieContext)
  // console.log("favaCount",FavouriteCount);
  const [Show, setShow] = useState(false)
  const userData = JSON.parse(localStorage.getItem('UserInfo')) || null
  // console.log(userData.userInfo);
  //
  // const dash = userData ? `/stream/dash/${userData.usrid}` : "/stream/login";
  // useEffect(() => {
  //   console.log("logDetails after", logDetail);
  // }, [logDetail]);
  const NotUser = '/nofavorite'
  let dash
  let fav
  let UserName
  if (!userData) {
    // console.log("No user info yet");
    dash = '/login'
  } else {
    dash =
      userData.role === 'ADMIN'
        ? `/dash/ad/${userData.userInfo.name}`
        : userData.role === 'USER'
        ? `/dash/us/${userData.userInfo.name}`
        : 'NOT'

    UserName = userData.userInfo.userName

    fav = `/favouritpage/${userData.userInfo.name}`
  }

  const HandleMenuToggle = e => {
    e.preventDefault()
    setShow(prev => !prev)
  }
  // console.log("dash:", dash);

  const hover = 'hover:text-subMain transi text-white relative'
  const Hover = ({ isActive }) => (isActive ? 'text-subMain' : hover)
  return (
    <div className='w-full relative'>
      {/* Logo */}
      <div className='bg-main px-5 md:px-7 shadow-md sticky   top-0 z-40'>
        <div className='container   py-5  flex justify-start gap-5 items-center'>
          {/**Logo Done**/}

          {/* Search Form */}
          {/* <div className=' col-span-7 md:col-span-3 flex flex-col gap-2'>
            <form
              className='w-full text-sm bg-dryGray rounded flex justify-start items-center gap-3 '
              action=''
            >
              <button
                className='bg-subMain w-12 h-12 rounded flexCol text-white'
                type='submit'
              >
                <BsFillSearchHeartFill />
              </button>

              <input
                className='font-mono  placeholder:text-border text-sm w-4/5 h-12 bg-transparent border-none px-2 text-black'
                type='text'
                placeholder={`${Text ? Text : 'Search movie name'}`}
              />
            </form>

            {UserName && (
              <div className='flex gap-2 text-sm justify-center items-center'>
                <p className='text-text text-sm'>
                  {' '}
                  Welcome to your profile {UserName}!🎉
                </p>
              </div>
            )}
          </div> */}
          {/**Search Form Done**/}

          {/*Menu*/}
          <div className='w-full font-medium text-sm hidden   lg:flex justify-between  items-center'>
            <div className='flex items-center gap-5'>
              <div className='col-span-1 lg:block hidden '>
                <div className='flex justify-center items-center'>
                  <p className='font-semibold text-white text-lg navbarText'>
                    Fin <span className='text-xl'>X</span>{' '}
                  </p>
                  <Link to={`/`}>
                    <img
                      className='h-6 w-6 rounded-full'
                      src='https://res.cloudinary.com/dtjgj2odu/image/upload/v1739151976/logoround_awixqx.png'
                      alt=''
                    />
                  </Link>
                </div>
              </div>
              <NavLink
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'text-main bg-white'
                      : 'hover:text-main hover:bg-white transi text-white relative'
                  } hov p-2 flex justify-center gap-2 items-center rounded-md navbarText
`
                }
                to={`/movies`}
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'text-main bg-white'
                      : 'hover:text-main hover:bg-white transi text-white relative'
                  } hov p-2 flex justify-center gap-2 items-center rounded-md navbarText
`
                }
                to={`/about`}
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'text-main bg-white'
                      : 'hover:text-main hover:bg-white transi text-white relative'
                  } hov p-2 flex justify-center gap-2 items-center rounded-md navbarText
`
                }
                to={`/contact`}
              >
                Features
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'text-main bg-white'
                      : 'hover:text-main hover:bg-white transi text-white relative  navbarText'
                  } hov  p-2 flex justify-center items-center rounded-md navbarText
`
                }
                to={`${dash}`}
              >
                Pages
                <MdArrowDropDown className='h-6 w-6' />
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'text-main bg-white'
                      : 'hover:text-main hover:bg-white  transi text-white relative'
                  } hov   p-3 flex justify-center items-center rounded-md navbarText
`
                }
                to={`${fav || NotUser}`}
              >
                Cart(2)
              </NavLink>
            </div>

            <div className='flex items-center gap-5'>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? 'text-main bg-white'
                      : 'hover:text-main hover:bg-white transi text-white relative  navbarText'
                  } hov  p-2 flex justify-center items-center rounded-md navbarText
`
                }
                to={`${dash}`}
              >
                <p>Login</p>
                <GoArrowUpRight />
              </NavLink>

              <Link
                className='p-2 text-white navbarText bg-blueBtn rounded-md'
                to={'/'}
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className='w-full flex flex-col lg:hidden'>
            <div className='flex justify-between item center w-full '>
              <div className='col-span-1  '>
                <div className='flex justify-center items-center'>
                  <p className='font-semibold text-white text-lg navbarText'>
                    Fin <span className='text-xl'>X</span>{' '}
                  </p>
                  <Link to={`/`}>
                    <img
                      className='h-6 w-6 rounded-full'
                      src='https://res.cloudinary.com/dtjgj2odu/image/upload/v1739151976/logoround_awixqx.png'
                      alt=''
                    />
                  </Link>
                </div>
              </div>
              <div>
                <LuSquareMenu
                  onClick={e => {
                    HandleMenuToggle(e)
                  }}
                  className='w-6 h-6'
                />
              </div>
            </div>
          </div>

          <div
            className={`absolute w-full top-0 left-0 bg-faintWhite h-28 ${
              Show ? 'show' : 'menu'
            }
`}
          >
            <div className='flex justify-between items-center p-3 w-full'>
              
              <div className='flex justify-center items-center bg-mainTrans rounded-full p-2'>
                <p className='font-semibold text-white text-lg navbarText'>
                  Fin <span className='text-xl'>X</span>{' '}
                </p>
                <Link to={`/`}>
                  <img
                    className='h-6 w-6 rounded-full'
                    src='https://res.cloudinary.com/dtjgj2odu/image/upload/v1739151976/logoround_awixqx.png'
                    alt=''
                  />
                </Link>
              </div>
              <div className='rounded-full hover:bg-main transi'>
                {/* <MdOutlineCancel /> */}
                <GiCancel
                  className='text-main h-10 w-10 hover:text-faintWhite transi'
                  onClick={e => {
                    HandleMenuToggle(e)
                  }}
                />
              </div>
            </div>
          </div>

          {/*Menu Done*/}
        </div>
      </div>
    </div>
  )
}

export default Navbar
