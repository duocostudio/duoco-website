import { Fade } from 'react-awesome-reveal'

import Container from '../components/Container'
import Paragraph from '../components/Paragraph'
import Subtitle from '../components/Subtitle'
import Title from '../components/Title'

const CLIENTS = [
  {
    name: '360 Juice',
    logo: '/images/customers/360juice@2x.png',
  },
  {
    name: 'Magia Negra',
    logo: '/images/customers/magianegra@2x.png',
  },
  {
    name: 'Networking',
    logo: '/images/customers/networking@2x.png',
  },
  {
    name: 'Pamcakes',
    logo: '/images/customers/pamcakes@2x.png',
  },
  {
    name: 'Sounds Good',
    logo: '/images/customers/soundsgood@2x.png',
  },
]

export default function Clients() {
  return (
    <div>
      <section>
        <Container>
          <div className="p-24">
            <div className="flex flex-col">
              <div className="h-20"></div>
              <div className="flex flex-row items-center mb-20">
                <div className="flex flex-col">
                  <Fade triggerOnce cascade>
                    <Title>Our</Title>
                    <Subtitle>Clients</Subtitle>
                  </Fade>
                </div>
                <span className="ml-auto w-1/2">
                  <Fade triggerOnce delay={900}>
                    <Paragraph>
                      We’re lucky enough to work with many startups and leaders.
                    </Paragraph>
                  </Fade>
                </span>
              </div>
              <ul className="flex flex-row items-center justify-center space-x-6">
                <Fade triggerOnce cascade>
                  {CLIENTS.map((item, index) => (
                    <li key={index}>
                      <div className="flex flex-row items-center justify-center">
                        <img className="w-48" src={item.logo}></img>
                      </div>
                    </li>
                  ))}
                </Fade>
              </ul>
              <div className="h-20"></div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
