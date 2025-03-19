import { useContext, useEffect, useState } from 'react'

import Layout from '../Layout/Layout'
import { MdCancel } from 'react-icons/md'
import MovieContext from '../Context/FinContext'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from '../Redux/features/User/UserSlice'

const Homee = () => {
  const [shareOpen, setShareOpen] = useState(false)
  const { HandleSubscribe } = useContext(MovieContext)
  const User = JSON.parse(localStorage.getItem('userInfo'))
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
//   useEffect(() => {
//   dispatch(fetchUsers()) // ✅ Auto-fetch users on mount


  
// }, [dispatch])


  return (
    <div>
      <Layout>
        <div className='w-full bg-text p-5 flex justify-center items-center'>
          <button
            onClick={() => dispatch(fetchUsers())}
            className='bg-subMain border border-black rounded p-2  hover:bg-red-900 transi'
          >
            Fetch Users
          </button>
        </div>
        ;
        <div className='w-full'>
          <div className='flex justify-center items-center'>
            <h1 className='text-xl font-semibold'>List of users</h1>
          </div>
          {users?.isLoading && <p>Loading...</p>}
          {users?.data && (
            <>
              <div className='flex flex-col gap-3'>
                {users &&
                  users?.data.map((user, i) => (
                    <div className='flex gap-4'>
                      <p>{user?.id}</p>{' '}
                      <div className='flex gap-4'>
                        <p>Name: {user?.name}</p>
                        <p>Email: {user?.email}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}
          {users?.error && <p>{users?.error}</p>}
        </div>
      </Layout>
    </div>
  )
}

export default Homee
