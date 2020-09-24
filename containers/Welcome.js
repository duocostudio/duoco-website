import { Fade } from 'react-awesome-reveal'

import Button from '../components/Button'
import DuocoLogo from '../components/DuocoLogo'
import Container from '../components/Container'
import Paragraph from '../components/Paragraph'
import Subtitle from '../components/Subtitle'
import Title from '../components/Title'


export default function Welcome() {
  return (
    <div>
      <section>
        <Container>
          <div className="flex flex-col items-start">
            <div className="flex flex-row items-center w-1/2 h-40">
              <DuocoLogo />
            </div>
            <div className="h-16"></div>
            <div className="flex flex-col">
              <Fade triggerOnce cascade>
                <Title>We design products</Title>
                <Subtitle>people love to use</Subtitle>
                <div className="w-1/2 mt-16">
                  <Paragraph>
                    We help startups and Fortune 500 companies craft engaging
                    brands, websites, and apps. Based in Tijuana, Mexico.
                  </Paragraph>
                </div>
                <div className="flex my-16">
                  <Button>Contact us</Button>
                </div>
              </Fade>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
