import { Fade } from 'react-awesome-reveal'

import Container from '../components/Container'
import ServiceItem from '../components/ServiceItem'
import Subtitle from '../components/Subtitle'
import Title from '../components/Title'

const SERVICES_LEFT = [
  { title: 'Branding & Visual Identity' },
  { title: 'Wireframing & User Testing' },
  { title: 'Mobile App & Web Design' },
  { title: 'E-commerce & Shopify' },
  { title: 'Design Systems' },
  { title: 'Flutter App Design' },
]

const SERVICES_RIGHT = [
  { title: 'Animation & Motion Design' },
  { title: 'Illustrations (Vectorized, 3D & more)' },
  { title: 'User Experience Design' },
  { title: 'Consulting & Strategy' },
  { title: 'Prototyping' },
]

export default function Services() {
  return (
    <div>
      <section>
        <Container>
          <div className="flex flex-col">
            <div className="h-40"></div>
            <Fade cascade>
              <Title>Services</Title>
              <Subtitle>What we do</Subtitle>
            </Fade>
            <div className="h-32"></div>
            <div className="flex flex-row px-24">
              <ul>
                <Fade cascade>
                  {SERVICES_LEFT.slice(0, 6).map((item, index) => <ServiceItem key={index}>{item.title}</ServiceItem>)}
                </Fade>
              </ul>
              <ul className="ml-auto">
                <Fade cascade>
                  {SERVICES_RIGHT.slice(6).map((item, index) => <ServiceItem key={index}>{item.title}</ServiceItem>)}
                </Fade>
              </ul>
            </div>
            <div className="h-40"></div>
          </div>
        </Container>
      </section>
    </div>
  )
}
