import { useState } from 'react'

import Container from '../components/Container'
import SocialItem from '../components/SocialItem'

import Facebook from '../public/images/facebook.svg'
import Instagram from '../public/images/instagram.svg'
import Twitter from '../public/images/twitter.svg'
import Dribbble from '../public/images/dribbble.svg'
import Menu from '../public/images/menu.svg'

const SOCIAL_LINKS = [
  { title: 'Instagram', URL: 'https://www.instagram.com/', icon: <Instagram /> },
  { title: 'Twitter', URL: 'https://twitter.com/', icon: <Twitter /> },
  { title: 'Dribbble', URL: 'https://www.dribbble.com/', icon: <Dribbble /> },
  { title: 'Facebook', URL: 'https://www.facebook.com/', icon: <Facebook /> },
]

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  function handleMenu() {
    setShowMenu(!showMenu)
  }
  return (
    <div>
      {
        showMenu &&
        <div className="fixed left-0 right-0 top-0">
          <div className="w-screen h-screen flex flex-row justify-end">
            <div onClick={handleMenu} className="w-1/2 h-full bg-white bg-opacity-75"></div>
            <div className="flex flex-col items-center w-1/2 h-full bg-black overflow-y-scroll">
              <div className="h-20 flex-shrink-0"></div>
              <div className="flex flex-col items-center space-y-6">
                <h1 className="cursor-pointer font-light text-4xl text-white border-white border-b-2">Home</h1>
                <h1 className="cursor-pointer font-light text-4xl text-white text-opacity-50">About</h1>
                <h1 className="cursor-pointer font-light text-4xl text-white text-opacity-50">Contact us</h1>
              </div>
              <div className="h-40 flex-shrink-0"></div>
              <h2 className="font-bold text-xl text-white">Have a project for us?</h2>
              <div className="h-10 flex-shrink-0"></div>
              <div className="py-5 px-12 bg-white flex flex-row items-center justify-center">
                <span className="text-sm font-semibold tracking-wide text-black uppercase">Let's talk</span>
              </div>
              <div className="h-20 flex-shrink-0"></div>
              <div className="flex flex-row items-center justify-center space-x-5">
                {SOCIAL_LINKS.map((item, index) => (
                  <SocialItem
                    key={index}
                    title={item.title}
                    icon={item.icon} />
                ))}
              </div>
              <div className="h-20 flex-shrink-0"></div>
            </div>
          </div>
        </div>
      }

      <div className="fixed left-0 right-0 top-0">
        <Container>
          <div className="flex flex-row items-center h-40">
            <div className="ml-auto flex flex-row items-center">
              <div
                className="select-none bg-black hover:bg-gray-700 cursor-pointer square flex flex-row items-center justify-row"
                onClick={handleMenu}>
                <Menu />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <style jsx>{`
        .square {
          height: 52px;
          width: 52px;
        }
      `}</style>
    </div>
  )
}
