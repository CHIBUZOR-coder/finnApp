import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
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
      title: 'About',
      path: ''
    },
    {
      title: 'Foundings',
      path: ''
    },
    {
      title: 'Jobs',
      path: ''
    }
  ]

  const Link2 = [
    {
      title: 'Billings',
      path: ''
    },
    {
      title: 'Customer Servuice',
      path: ''
    },
    {
      title: 'Trade',
      path: ''
    },
    {
      title: 'Plans',
      path: ''
    }
  ]

  const Link3 = [
    {
      title: 'Actions',
      path: ''
    },
    {
      title: 'Servuice',
      path: ''
    },
    {
      title: 'Banking',
      path: ''
    },
    {
      title: 'Subscriptions',
      path: ''
    }
  ]

  const Link4 = [
    {
      title: 'Actions',
      path: ''
    },
    {
      title: 'Servuice',
      path: ''
    },
    {
      title: 'Banking',
      path: ''
    },
    {
      title: 'Subscriptions',
      path: ''
    }
  ]

  const Link5 = [
    {
      title: 'Investments',
      path: ''
    },
    {
      title: 'Foreign Exchange',
      path: ''
    },
    {
      title: 'Billings',
      path: ''
    },
    {
      title: 'Forex',
      path: ''
    }
  ]

  const Link6 = [
    {
      title: 'Startups',
      path: ''
    },
    {
      title: 'Transctions',
      path: ''
    },
    {
      title: 'Witdrawals',
      path: ''
    },
    {
      title: 'Forex',
      path: ''
    }
  ]

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
    <div className='bg-main md:p-10 p-4 border-2 border-black w-full  flex flex-col gap-4 '>
      <div
        className='md:flex md:gap-24 md:justify-between grid grid-cols-2 gap-3 px-3'
      >
        <div className='flex flex-col justify-between  items-start   gap-3 text-[10px]'>
          {Links.map((link, index) => (
            <div
              key={index}
              className='flex justify-start   items-start my-2 md:my-0 footText gap-5 md:gap-6 '
            >
              <Link
                to={`/`}
                className=' cursor-pointer font-semibold text-[12px]'
              >
                {link.title}
              </Link>
            </div>
          ))}
          <Link
            to='/'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className=' flex justify-center items-center '
          ></Link>
        </div>
        <div className='flex flex-col justify-between  items-start   gap-3 text-[10px]'>
          {Link2.map((link, index) => (
            <div
              key={index}
              className='flex justify-start   items-start my-2 md:my-0 footText gap-5 md:gap-6 '
            >
              <Link
                to={`/`}
                className='cursor-pointer font-semibold text-[12px]'
              >
                {link.title}
              </Link>
            </div>
          ))}
          <Link
            to='/'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className=' flex justify-center items-center '
          ></Link>
        </div>
        <div className='flex flex-col justify-between  items-start   gap-3 text-[10px]'>
          {Link3.map((link, index) => (
            <div
              key={index}
              className='flex justify-start   items-start my-2 md:my-0 footText gap-5 md:gap-6 '
            >
              <Link
                to={`/`}
                className='  cursor-pointer font-semibold text-[12px]'
              >
                {link.title}
              </Link>
            </div>
          ))}
          <Link
            to='/'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className=' flex justify-center items-center '
          ></Link>
        </div>
        <div className='flex flex-col justify-between  items-start   gap-3 text-[10px]'>
          {Link4.map((link, index) => (
            <div
              key={index}
              className='flex justify-start   items-start my-2 md:my-0 footText gap-5 md:gap-6 '
            >
              <p className='cursor-pointer font-semibold text-[12px]'>
                {link.title}
              </p>
            </div>
          ))}
          <Link
            to='/'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className=' flex justify-center items-center '
          ></Link>
        </div>
        <div className='flex flex-col justify-between  items-start   gap-3 text-[10px]'>
          {Link5.map((link, index) => (
            <div
              key={index}
              className='flex justify-start   items-start my-2 md:my-0 footText gap-5 md:gap-6 '
            >
              <Link
                to={`/`}
                className=' font-semibold text-[12px] cursor-pointer'
              >
                {link.title}
              </Link>
            </div>
          ))}
          <Link
            to='/'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className=' flex justify-center items-center '
          ></Link>
        </div>

        <div className='flex flex-col justify-between  items-start   gap-3 text-[10px]'>
          {Link6.map((link, index) => (
            <div
              key={index}
              className='flex justify-start   items-start my-2 md:my-0 footText gap-5 md:gap-6 '
            >
              <Link
                to={`/`}
                className=' font-semibold text-[12px] cursor-pointer'
              >
                {link.title}
              </Link>
            </div>
          ))}
          <Link
            to='/'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className=' flex justify-center items-center '
          ></Link>
        </div>
      </div>
      <div className='flex justify-center gap-8'>
        {socials.map((item, i) => (
          <div className=''>
            <Link key={i}>{item.icon}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer
