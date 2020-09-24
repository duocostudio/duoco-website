import { Fade } from 'react-awesome-reveal'

import Button from '../components/Button'
import Container from '../components/Container'
import Paragraph from '../components/Paragraph'
import Subtitle from '../components/Subtitle'
import Title from '../components/Title'

export default function ContactUs() {
  return (
    <div>
      <section>
        <Container>
          <div className="flex flex-col items-center text-center">
            <div className="h-40"></div>
            <Fade cascade>
              <Title>Need help with a project?</Title>
              <Subtitle>Let’s talk!</Subtitle>
              <div className="my-10 mx-auto w-1/2">
                <Paragraph>
                  Get support with a large platform, flesh out your first MVP, go from
                  concept to investment, or take your startup to the next level. We’re here
                  to support your unique business needs.
                </Paragraph>
              </div>
              <Button>Contact us</Button>
            </Fade>
            <div className="h-56"></div>
          </div>
        </Container>
      </section>
    </div>
  )
}
