import { Fade } from 'react-awesome-reveal'

import Container from '../components/Container'
import Paragraph from '../components/Paragraph'
import Subtitle from '../components/Subtitle'
import Title from '../components/Title'
import Project from '../components/Project'

const PROJECTS = [
  {
    title: '360 Juice',
    logo: '/images/customers/360juice@2x.png',
    description: 'Rebranding, Strategy & Design for one of the world largest job searching platform.',
    tags: ['Brand', 'Web', 'iOS', 'Android'],
    backgroundColor: 'bg-green-600'
  },
  {
    title: 'Magia Negra',
    logo: '/images/customers/magianegra@2x.png',
    description: 'Longwalks is an online journal that helps friend and families develop closer relationships.',
    tags: ['iOS', 'Android'],
    backgroundColor: 'bg-gray-800'
  },
  {
    title: 'Networking',
    logo: '/images/customers/networking@2x.png',
    description: 'We were approached by Telus to build a digital kiosk experience for the new Telus sky building in Calgary, Canada.',
    tags: ['Web', 'Digital Kiosk'],
    backgroundColor: 'bg-indigo-700'
  },
  {
    title: 'Pamcakes',
    logo: '/images/customers/pamcakes@2x.png',
    description: 'To help Adobde release their new product, we created a UI kit that the design community loved.',
    tags: ['Web', 'iOS'],
    backgroundColor: 'bg-purple-600'
  },
  {
    title: 'Sounds Good',
    logo: '/images/customers/soundsgood@2x.png',
    description: 'To help Adobde release their new product, we created a UI kit that the design community loved.',
    tags: ['Web', 'iOS'],
    backgroundColor: 'bg-blue-600'
  },
]

export default function Projects() {
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
                    <Title>Case</Title>
                    <Subtitle>Studies</Subtitle>
                  </Fade>
                </div>
                <div className="ml-auto w-5/12">
                  <Fade triggerOnce delay={900}>
                    <Paragraph>
                      Check out some featured projects we’ve been
                      working on. Want to see more? Contact us for more
                      information.
                  </Paragraph>
                  </Fade>
                </div>
              </div>
              <Fade triggerOnce>
                {PROJECTS.map((item, index) => (
                  <Project
                    key={index}
                    title={item.title}
                    logo={item.logo}
                    description={item.description}
                    backgroundColor={item.backgroundColor}
                    tags={item.tags} />
                ))}
              </Fade>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
