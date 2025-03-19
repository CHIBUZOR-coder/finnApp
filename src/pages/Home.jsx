import Layout from '../Layout/Layout'

const Home = () => {

  const Links = [
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
    icon:<FaYoutube />

  },
   {
    title: 'Pinterest',
    path: ''
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

        <div className='bg-faintWhite w-full'>

        </div>
      </div>
    </Layout>
  )
}

export default Home
