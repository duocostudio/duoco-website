import Head from 'next/head'

import Button from '../components/Button'
import DuocoLogo from '../components/DuocoLogo'
import ClientItems from '../components/ClientItems'
import Container from '../components/Container'
import Paragraph from '../components/Paragraph'
import ServiceItem from '../components/ServiceItem'
import SocialItem from '../components/SocialItem'
import Subtitle from '../components/Subtitle'
import Title from '../components/Title'
import WorkItem from '../components/WorkItem'

const FOOTTER_LINKS = [
  { title: 'Home', URL: '/' },
  { title: 'About', URL: '/about' },
  { title: 'Careers', URL: '/careers' },
  { title: 'Contact us', URL: '/contact-us' },
]

const FOOTER_SOCIAL_LINKS = [
  { title: 'Instagram', URL: 'https://www.instagram.com/' },
  { title: 'Twitter', URL: 'https://twitter.com/' },
  { title: 'Dribbble', URL: 'https://www.dribbble.com/' },
  { title: 'Facebook', URL: 'https://www.facebook.com/' },
]

const SERVICES = [
  { title: 'Branding & Visual Identity' },
  { title: 'Wireframing & User Testing' },
  { title: 'Mobile App & Web Design' },
  { title: 'E-commerce & Shopify' },
  { title: 'Design Systems' },
  { title: 'Flutter App Design' },
  { title: 'Animation & Motion Design' },
  { title: 'Illustrations (Vectorized, 3D & more)' },
  { title: 'User Experience Design' },
  { title: 'Consulting & Strategy' },
  { title: 'Prototyping' },
]

const PROJECTS = [
  { title: '-', description: '-', tags: ['-'] },
  { title: '-', description: '-', tags: ['-'] },
  { title: '-', description: '-', tags: ['-'] },
  { title: '-', description: '-', tags: ['-'] },
  { title: '-', description: '-', tags: ['-'] },
  { title: '-', description: '-', tags: ['-'] },
  { title: '-', description: '-', tags: ['-'] },
]

const CLIENTS = [
  { name: '-', image: '-' },
  { name: '-', image: '-' },
  { name: '-', image: '-' },
  { name: '-', image: '-' },
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" type="image/png" href="/favicon.png"></link>
        <link href="https://unpkg.com/tailwindcss@^1.4/dist/tailwind.min.css" rel="stylesheet" />
      </Head>

      <div className="container mx-auto fixed left-0 right-0 top-0">
        <div className="flex flex-row items-center h-40">
          <div className="ml-auto flex flex-row items-center">
            <div className="square"></div>
          </div>
        </div>
      </div>

      {/* Welcome */}
      <section>
        <Container>
          <div className="flex flex-col items-start">
            <div className="flex flex-row items-center w-1/2 h-40">
              <DuocoLogo />
            </div>
            <div className="h-16"></div>
            <div className="flex flex-col">
              <div className="-mb-4">
                <Title>We design products</Title>
              </div>
              <Subtitle size="6xl">people love to use</Subtitle>
            </div>
            <div className="h-16"></div>
            <div className="w-1/2">
              <Paragraph>
                We help startups and Fortune 500 companies craft engaging
                brands, websites, and apps. Based in Montréal, Canada.
              </Paragraph>
            </div>
            <div className="h-16"></div>
            <Button>Contact us</Button>
            <div className="h-16"></div>
          </div>
        </Container>
      </section>

      {/* Work */}
      <section>
        <Container>
          <div className="p-24">
            <div className="flex flex-col">
              <div className="h-20"></div>
              <div className="flex flex-row items-center mb-20">
                <div className="flex flex-col">
                  <div className="-mb-4">
                    <Title>Case</Title>
                  </div>
                  <Subtitle size="6xl">Studies</Subtitle>
                </div>
                <div className="ml-auto w-5/12">
                  <Paragraph>
                    Check out some featured projects we’ve been
                    working on. Want to see more? Contact us for more
                    information.
                  </Paragraph>
                </div>
              </div>
              {PROJECTS.map((item) => <WorkItem key={item} />)}
            </div>
          </div>
        </Container>
      </section>

      {/* Clients */}
      <section>
        <Container>
          <div className="p-24">
            <div className="flex flex-col">
              <div className="h-20"></div>
              <div className="flex flex-row items-center mb-20">
                <div className="flex flex-col">
                  <Title>Clients</Title>
                  <Subtitle>We loved working with</Subtitle>
                </div>
                <span className="ml-auto w-1/2">
                  <Paragraph>
                    We’re lucky enough to work with many startups and leaders.
                  </Paragraph>
                </span>
              </div>
              <ul className="flex flex-row items-center justify-center">
                {CLIENTS.map((item, index) => <ClientItems key={index} />)}
              </ul>
              <div className="h-20"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section>
        <Container>
          <div className="flex flex-col">
            <div className="h-20"></div>
            <Title>Services</Title>
            <Subtitle>What we do</Subtitle>
            <div className="h-32"></div>
            <div className="flex flex-row px-24">
              <ul>
                {SERVICES.slice(0, 6).map((item, index) => <ServiceItem key={index}>{item.title}</ServiceItem>)}
              </ul>
              <ul className="ml-auto">
                {SERVICES.slice(6).map((item, index) => <ServiceItem key={index}>{item.title}</ServiceItem>)}
              </ul>
            </div>
            <div className="h-20"></div>
          </div>
        </Container>
      </section>

      {/* Reviews */}
      <section>
        <Container>
          <div className="p-24">
            <div className="flex flex-col">
              <Title>Reviews</Title>
              <Subtitle>Words on the street</Subtitle>
              <div className="h-24"></div>
              <div className="flex flex-row items-end">
                <div className="h-64 w-64 bg-gray-400"></div>
                <div className="ml-auto w-1/2">
                  <div className="flex flex-col">
                    <h1 className="text-6xl font-bold">"</h1>
                    <div className="mb-16">
                      <Paragraph>
                        "We had many detailed requirements for the new Telus Sky building which Orizon
                        were able to easily meet. They developed an MVP of the kiosk that focused on the
                        most important features first. This made our employees and guests very satisfied
                        thanks to the improved support, engagement, and navigation their system brought us."
                      </Paragraph>
                    </div>
                    <div className="flex flex-row items-end">
                      <div className="flex flex-col">
                        <span className="text-2xl">Colleen Doll</span>
                        <span className="text-xl opacity-50">Founder at Tinder</span>
                      </div>
                      <div className="ml-auto bg-gray-400 w-32 h-16"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact us */}
      <section>
        <Container>
          <div className="flex flex-col items-center text-center">
            <div className="h-20"></div>
            <Title>Need help with a project?</Title>
            <Subtitle>Let’s talk!</Subtitle>
            <div className="my-10 w-1/2">
              <Paragraph>
                Get support with a large platform, flesh out your first MVP, go from
                concept to investment, or take your startup to the next level. We’re here
                to support your unique business needs.
              </Paragraph>
            </div>
            <Button>Contact us</Button>
            <div className="h-56"></div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer>
        <Container>
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <DuocoLogo />
              <div className="ml-auto flex flex-row items-center">
                {FOOTER_SOCIAL_LINKS.map((item, index) => <SocialItem key={index} />)}
              </div>
            </div>
            <div className="h-12"></div>
            <div className="flex flex-row items-center">
              {FOOTTER_LINKS.map((item, index) => (
                <div key={index} className="mr-12">
                  <span>{item.title}</span>
                </div>
              ))}
              <div className="ml-auto">
                <span>&copy; {new Date().getFullYear()} Duōco.  All Rights Reserved.</span>
              </div>
            </div>
            <div className="h-24"></div>
          </div>
        </Container>
      </footer>

      <style jsx>{`
        .nav-button {
          height: 52px;
          width: 52px;
          background-color: red;
        }
        .square {
          height: 52px;
          width: 52px;
          background-color: black;
        }
      `}</style>
    </div>
  )
}
