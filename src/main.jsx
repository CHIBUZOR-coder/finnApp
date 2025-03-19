import { Children, lazy, StrictMode, Suspense, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './Redux/app/store.js'
import './index.css'
import App from './App.jsx'
import Homee from './pages/Homeee.jsx'

// import VerifyEmail from './pages/VerifyEmail.jsx'

const Home = lazy(() => import('./pages/Home'))

const NotFound = lazy(() => import('./pages/NotFound'))

const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))

const ResetPassword = lazy(() => import('./pages/ResetPassword.jsx'))
const Thankyou = lazy(() => import('./pages/Thankyou.jsx'))


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home /> // Default route
      },

      {
        path: 'homee',
        element: <Home /> // Default route
      },

      {
        path: 'register',
        element: <Register />
      },

      // {
      //   path: 'recovery',
      //   element: <AccountRecovery />
      // },
      {
        path: 'resetPassword/:token',
        element: <ResetPassword />
      },

      {
        path: 'thankyou',
        element: <Thankyou />
      },
      // {
      //   path: 'verifyEmail',
      //   element: <VerifyEmail />
      // },

      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense
        fallback={
          <div className='w-full h-[100vh] bg-main flex justify-center items-center'>
            <div className='w-[150px] h-[150px] rounded-full  border border-border animate-bounce'>
              <img
                className='h-full w-full rounded-full'
                src='https://res.cloudinary.com/dtjgj2odu/image/upload/v1739151976/logoround_awixqx.png'
                alt=''
              />
            </div>
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </StrictMode>
)
