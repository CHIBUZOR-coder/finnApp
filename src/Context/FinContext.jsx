import { createContext, useCallback, useEffect, useRef, useState } from 'react'

import { Movies } from '../Data/MovieData'
import { Casts } from '../Data/CastsData'
// import { CategoryData } from "../Data/CategoryData"; // Include CategoryData

import { BsFillGridFill } from 'react-icons/bs'
import { FaHeart, FaListAlt, FaUser } from 'react-icons/fa'
import { RiLockPasswordLine, RiMovie2Fill } from 'react-icons/ri'
import { HiViewColumns } from 'react-icons/hi2'
import { FiSettings } from 'react-icons/fi'

import { userData } from '../Data/UserData'


import { IoLogOut } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

// import DashboardPage from "../pages/DashBoard/Dashboard";

const FinContext = createContext()

const FinProvider
 = ({ children }) => {
  // fetchied
  const staticUsers = userData
 

  return <FinContext.Provider value={{}}>{children}</FinContext.Provider>
}

export default FinContext
export { FinProvider }
