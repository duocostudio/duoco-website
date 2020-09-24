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
            <Fade triggerOnce cascade>
              <Title>Services</Title>
              <Subtitle>What we do</Subtitle>
            </Fade>
            <div className="h-32"></div>
            <div className="flex flex-col lg:flex-row lg:px-24">
              <ul>
                <Fade triggerOnce cascade>
                  {SERVICES_LEFT.map((item, index) => <ServiceItem key={index}>{item.title}</ServiceItem>)}
                </Fade>
              </ul>
              <ul className="lg:ml-auto">
                <Fade triggerOnce cascade>
                  {SERVICES_RIGHT.map((item, index) => <ServiceItem key={index}>{item.title}</ServiceItem>)}
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
