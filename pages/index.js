import Head from 'next/head'
import { useState, useEffect } from 'react'

import Button from '../components/Button'
import DuocoLogo from '../components/DuocoLogo'
import Container from '../components/Container'
import Paragraph from '../components/Paragraph'
import ServiceItem from '../components/ServiceItem'
import SocialItem from '../components/SocialItem'
import Subtitle from '../components/Subtitle'
import Title from '../components/Title'
import Project from '../components/Project'

import Facebook from '../public/facebook.svg'
import Instagram from '../public/instagram.svg'
import Twitter from '../public/twitter.svg'
import Dribbble from '../public/dribbble.svg'
import Menu from '../public/menu.svg'

const FOOTTER_LINKS = [
  { title: 'Home', URL: '/' },
  { title: 'About', URL: '/about' },
  { title: 'Careers', URL: '/careers' },
  { title: 'Contact us', URL: '/contact-us' },
]

const FOOTER_SOCIAL_LINKS = [
  { title: 'Instagram', URL: 'https://www.instagram.com/', icon: <Instagram /> },
  { title: 'Twitter', URL: 'https://twitter.com/', icon: <Twitter /> },
  { title: 'Dribbble', URL: 'https://www.dribbble.com/', icon: <Dribbble /> },
  { title: 'Facebook', URL: 'https://www.facebook.com/', icon: <Facebook /> },
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
  {
    title: 'Your Next Job',
    logo: 'https://assets.website-files.com/5d27763c46ba9e561dc5b972/5f3fbddf12257d1abf9ee616_5e0fe65d946b120472aa69f6_Talent%202.png',
    description: 'Rebranding, Strategy & Design for one of the world largest job searching platform.',
    tags: ['Brand', 'Web', 'iOS', 'Android'],
    backgroundColor: 'bg-gray-700'
  },
  {
    title: 'Journal Together',
    logo: 'https://assets.website-files.com/5d27763c46ba9e561dc5b972/5e6b6b3340b2ff0c422f36ae_longwalks%20white%20logo%201.png',
    description: 'Longwalks is an online journal that helps friend and families develop closer relationships.',
    tags: ['iOS', 'Android'],
    backgroundColor: 'bg-green-600'
  },
  {
    title: 'Telus Kiosk',
    logo: 'https://assets.website-files.com/5d27763c46ba9e561dc5b972/5e6695c7366cda239d3a5e3f_Logo_TELUS%201.png',
    description: 'We were approached by Telus to build a digital kiosk experience for the new Telus sky building in Calgary, Canada.',
    tags: ['Web', 'Digital Kiosk'],
    backgroundColor: 'bg-indigo-700'
  },
  {
    title: 'Social Meet Up',
    logo: 'https://assets.website-files.com/5d27763c46ba9e561dc5b972/5d503171a53fc77309ac16d9_Adobepng.png',
    description: 'To help Adobde release their new product, we created a UI kit that the design community loved.',
    tags: ['Web', 'iOS'],
    backgroundColor: 'bg-purple-700'
  },
]

const CLIENTS = [
  {
    name: 'Your Next Job',
    logo: 'https://assets.website-files.com/5d27763c46ba9e561dc5b972/5f3fbddf12257d1abf9ee616_5e0fe65d946b120472aa69f6_Talent%202.png',
  },
  {
    name: 'Journal Together',
    logo: 'https://assets.website-files.com/5d27763c46ba9e561dc5b972/5e6b6b3340b2ff0c422f36ae_longwalks%20white%20logo%201.png',
  },
  {
    name: 'Telus Kiosk',
    logo: 'https://assets.website-files.com/5d27763c46ba9e561dc5b972/5e6695c7366cda239d3a5e3f_Logo_TELUS%201.png',
  },
  {
    name: 'Social Meet Up',
    logo: 'https://assets.website-files.com/5d27763c46ba9e561dc5b972/5d503171a53fc77309ac16d9_Adobepng.png',
  },
]

const REVIEWS = [
  {
    comment: 'We had many detailed requirements for the new Telus Sky building which Duōco were able to easily meet. They developed an MVP of the kiosk that focused on the most important features first. This made our employees and guests very satisfied thanks to the improved support, engagement, and navigation their system brought us.',
    author: 'David Kalt',
    label: 'Founder at Tinder',
    picture: 'https://assets.website-files.com/5d27763c46ba9e561dc5b972/5f400edca45d957c64dc07e7_Group%201019%20(1).png'
  },
  {
    comment: 'The Duōco team a) has been an absolute pleasure to work with and b) done exceptional work. We gave them an impossible deadline, and even with that, they gave us more optionality, design iterations and degrees of freedom than could be reasonably asked for!',
    author: 'Colleen Doll',
    label: 'Co-founder, CEO of Marble',
    picture: 'https://assets.website-files.com/5d27763c46ba9e561dc5b972/5f400e4b0d812ec9232a376e_Group%201018%20(1).png'
  },
  {
    comment: 'The Duōco team is excellent. They put in an incredible amount of effort on our project and delivered something we\'re really happy with. Would highly recommend.',
    author: 'Sean Rad',
    label: 'Senior Consultant at Siemens',
    picture: 'https://assets.website-files.com/5d27763c46ba9e561dc5b972/5f3e8a6db863753a7091707b_5f29fe6be1621312eb6140ab_Group%201016%20(1).png'
  },
  {
    comment: 'Working with Duōco was truly a delightful experience. From our kick-off meeting to our final delivery, Duōco has the creative depth to go from an idea to a fully packaged and branded deliverable.   Their design commitment always focuses on brand and impact - which is very refreshing. On top of that, they are world class communicators which makes the process fun and non-intimidating.',
    author: 'Mark Solomon',
    label: 'Founder at Kernel, Venmo, Braintree, OS Fund',
    picture: 'https://assets.website-files.com/5d27763c46ba9e561dc5b972/5f29fe6cf3e8175c39eb7a87_Group%201013.png'
  }
]

export default function Home() {
  const [showMenu, setShowMenu] = useState(false)
  const [reviewIndex, setReviewIndex] = useState(0)
  const review = REVIEWS[reviewIndex]
  function handlePrev() {
    setReviewIndex(reviewIndex === 0 ? REVIEWS.length - 1 : reviewIndex - 1)
  }
  function handleNext() {
    setReviewIndex(reviewIndex < REVIEWS.length - 1 ? reviewIndex + 1 : 0)
  }
  return (
    <div>
      <Head>
        <title>Duōco Design Agency - We design products people love</title>
        <meta name="description" content="We design products people love"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="keywords" content="duoco, design, agency"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Duōco Design Agency" />
        <meta property="og:description" content="We design products people love" />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:url" content="https://duoco-website.vercel.app/" />
        <meta property="og:site_name" content="Duōco Design Agency" />
        <link rel="icon" type="image/svg" href="/favicon.svg"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.8.10/tailwind.min.css" integrity="sha512-KO1h5ynYuqsFuEicc7DmOQc+S9m2xiCKYlC3zcZCSEw0RGDsxcMnppRaMZnb0DdzTDPaW22ID/gAGCZ9i+RT/w==" crossOrigin="anonymous" />
      </Head>

      {
        showMenu &&
        <div className="fixed left-0 right-0 top-0">
          <div className="w-screen h-screen flex flex-row justify-end">
            <div className="w-1/2 h-full bg-black opacity-75">
              {/*  */}
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
                onClick={() => setShowMenu(!showMenu)}>
                <Menu />
              </div>
            </div>
          </div>
        </Container>
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
              <Title>We design products</Title>
              <Subtitle>people love to use</Subtitle>
            </div>
            <div className="h-16"></div>
            <div className="w-1/2">
              <Paragraph>
                We help startups and Fortune 500 companies craft engaging
                brands, websites, and apps. Based in Tijuana, Mexico.
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
                  <Title>Case</Title>
                  <Subtitle>Studies</Subtitle>
                </div>
                <div className="ml-auto w-5/12">
                  <Paragraph>
                    Check out some featured projects we’ve been
                    working on. Want to see more? Contact us for more
                    information.
                  </Paragraph>
                </div>
              </div>
              {PROJECTS.map((item, index) => (
                <Project
                  key={index}
                  title={item.title}
                  logo={item.logo}
                  description={item.description}
                  backgroundColor={item.backgroundColor}
                  tags={item.tags} />
              ))}
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
                  <Title>Our</Title>
                  <Subtitle>Clients</Subtitle>
                </div>
                <span className="ml-auto w-1/2">
                  <Paragraph>
                    We’re lucky enough to work with many startups and leaders.
                  </Paragraph>
                </span>
              </div>
              <ul className="flex flex-row items-center justify-center space-x-6">
                {CLIENTS.map((item, index) => (
                  <li key={index}>
                    <div className="bg-gray-400 rounded h-24 w-40 flex flex-row items-center justify-center">
                      <img className="w-32" src={item.logo}></img>
                    </div>
                  </li>
                ))}
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
            <div className="h-40"></div>
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
            <div className="h-40"></div>
          </div>
        </Container>
      </section>

      {/* Reviews */}
      <section>
        <Container>
          <div className="px-24">
            <div className="flex flex-col">
              <div className="h-40"></div>
              <Title>Reviews</Title>
              <Subtitle>Words on the street</Subtitle>
              <div className="h-10"></div>
              <div className="flex flex-row space-x-16 items-end">
                <img className="w-4/12" src={review.picture}></img>
                <div className="flex flex-col">
                  <div className="-mb-12">
                    <span className="font-bold" style={{ fontSize: 100 }}>“</span>
                  </div>
                  <div className="mb-16">
                    <Paragraph>{review.comment}</Paragraph>
                  </div>
                  <div className="flex flex-row items-end">
                    <div className="flex flex-col">
                      <h4 className="text-2xl font-bold">{review.author}</h4>
                      <h5 className="text-lg opacity-50">{review.label}</h5>
                    </div>
                    <div className="flex flex-row items-center ml-auto">
                      <div
                        onClick={handlePrev}
                        className="cursor-pointer select-none bg-gray-500 hover:bg-gray-600 w-16 h-16"></div>
                      <div
                        onClick={handleNext}
                        className="cursor-pointer select-none bg-gray-500 hover:bg-gray-600 w-16 h-16"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-40"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact us */}
      <section>
        <Container>
          <div className="flex flex-col items-center text-center">
            <div className="h-40"></div>
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
              <div className="ml-auto flex flex-row items-center space-x-5">
                {FOOTER_SOCIAL_LINKS.map((item, index) => (
                  <SocialItem
                    key={index}
                    title={item.title}
                    icon={item.icon} />
                ))}
              </div>
            </div>
            <div className="h-12"></div>
            <div className="flex flex-row items-center">
              <div className="flex flex-row space-x-12">
                {FOOTTER_LINKS.map((item, index) => <span key={index}>{item.title}</span>)}
              </div>
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
        }
      `}</style>
    </div>
  )
}
