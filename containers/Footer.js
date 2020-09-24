import { Fade } from 'react-awesome-reveal'

import DuocoLogo from '../components/DuocoLogo'
import Container from '../components/Container'
import SocialItem from '../components/SocialItem'

import Facebook from '../public/images/facebook.svg'
import Instagram from '../public/images/instagram.svg'
import Twitter from '../public/images/twitter.svg'
import Dribbble from '../public/images/dribbble.svg'

const SITE_LINKS = [
  { title: 'Home', URL: '/' },
  { title: 'About', URL: '/about' },
  { title: 'Careers', URL: '/careers' },
  { title: 'Contact us', URL: '/contact-us' },
]

const SOCIAL_LINKS = [
  { title: 'Instagram', URL: 'https://www.instagram.com/', icon: <Instagram /> },
  { title: 'Twitter', URL: 'https://twitter.com/', icon: <Twitter /> },
  { title: 'Dribbble', URL: 'https://www.dribbble.com/', icon: <Dribbble /> },
  { title: 'Facebook', URL: 'https://www.facebook.com/', icon: <Facebook /> },
]

export default function Footer() {
  return (
    <div>
      <footer>
        <Container>
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <Fade triggerOnce>
                <DuocoLogo />
              </Fade>
              <div className="ml-auto flex flex-row items-center space-x-5">
                <Fade triggerOnce cascade>
                  {SOCIAL_LINKS.map((item, index) => (
                    <SocialItem
                      key={index}
                      title={item.title}
                      icon={item.icon} />
                  ))}
                </Fade>
              </div>
            </div>
            <div className="h-12"></div>
            <div className="flex flex-row items-center">
              <div className="flex flex-row space-x-12">
                <Fade triggerOnce cascade>
                  {SITE_LINKS.map((item, index) => <span key={index}>{item.title}</span>)}
                </Fade>
              </div>
              <div className="ml-auto">
                <Fade triggerOnce>
                  <span>&copy; {new Date().getFullYear()} Duōco.  All Rights Reserved.</span>
                </Fade>
              </div>
            </div>
            <div className="h-24"></div>
          </div>
        </Container>
      </footer>
    </div>
  )
}
