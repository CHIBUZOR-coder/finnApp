import { Link } from 'react-router-dom'

const Footer = () => {
  const User = JSON.parse(localStorage.getItem('userInfo'))
  let dash
  let fav
  if (!User) {
    // console.log("No user info yet");
    dash = '/login'
  } else {
    dash =
      User.role === 'ADMIN'
        ? `/dash/ad/${User.name}`
        : User.role === 'USER'
        ? `/dash/us/${User.name}`
        : 'NOT'

    fav = `/favouritpage/${User.name}`
  }

  const action = 'Action'
  const Links = [
    {
      title: 'Company',
      path: ''
    },
    {
      title: 'Top Cartegories',
      path: ''
    }
  ]
  return (
    <div className='bg-main py-24 md:py-32 px-4 border-2 border-black w-full'>
      <div className='md:flex grid grid-cols-2 justify-between  items-start w-full  gap-10 text-[10px] litlle md:text-[16px] '>
        {Links.map((link, index) => (
          <div
            key={index}
            className='flex flex-col justify-start   items-start my-2 md:my-0 footText gap-5 md:gap-6 '
          >
            <p className=' font-semibold'>{link.title}</p>
          </div>
        ))}
        <Link
          to='/'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className=' flex justify-center items-center '
        ></Link>
      </div>
    </div>
  )
}

export default Footer
