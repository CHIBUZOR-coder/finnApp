import Layout from '../Layout/Layout'

const Home = () => {
  return (
    <Layout>
      <div>
        <div className='w-full flex justify-between px-5 md:px-7 mt-28 gap-4'>
          <div className='w-[45%] flex-'>
            <p
              className='mt-10 text-white text-5xl navbarText font-bold bannerText
'
            >
              Meet The Next Gen Banking
            </p>
          </div>

          <div
            className='w-[45%] h-[30rem]'
            style={{
              backgroundImage: "url('/images/card3.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
