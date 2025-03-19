import { FaPinterest, FaYoutube } from 'react-icons/fa'
import Layout from '../Layout/Layout'
import { FaWebflow } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Home = () => {
  const Linkss = [
    {
      title: 'Google',
      path: ''
    },
    {
      title: 'Facebook',
      path: ''
    },
    {
      title: 'YouTube',
      path: '',
      icon: <FaYoutube />
    },
    {
      title: 'Pinterest',
      path: '',
      icon: <FaPinterest />
    },
    ,
    {
      title: 'Webflow',
      path: '',
      icon: <FaWebflow />
    }
  ]

  return (
    <Layout>
      <div>
        <div className='w-full flex flex-col md:flex-row justify-between px-5 md:px-7 mt-28 gap-4'>
          <div className='w-full md:w-[45%] flex flex-col gap-3'>
            <p
              className='mt-10 text-white text-5xl navbarText font-bold bannerText
'
            >
              Meet The Next Gen Banking
            </p>
            <p className='text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              suscipit.
            </p>
          </div>

          <div
            className='w-full md:w-[45%] h-[30rem]'
            style={{
              backgroundImage: "url('/images/card3.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        </div>

        <div className='bg-faintWhite w-full flex justify-center gap-10 py-24'>
          {Linkss.map((link, i) => (
            <Link key={i} className='flex justify-center items-center text-main font-semibold'>
              <p>{link.icon}</p>

              <p>{link.title}</p>
             
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Home
