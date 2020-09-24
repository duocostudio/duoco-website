import { useState } from 'react'
import { Fade } from 'react-awesome-reveal'

import Container from '../components/Container'
import Paragraph from '../components/Paragraph'
import Subtitle from '../components/Subtitle'
import Title from '../components/Title'

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

export default function Reviews() {
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
      <section>
        <Container>
          <div className="px-24">
            <div className="flex flex-col">
              <div className="h-40"></div>
              <Fade triggerOnce cascade>
                <Title>Reviews</Title>
                <Subtitle>Words on the street</Subtitle>
              </Fade>
              <div className="h-10"></div>
              <div className="flex flex-row space-x-16 items-end">
                <img className="w-4/12" src={review.picture}></img>
                <div className="flex flex-col">
                  <div className="-mb-12">
                    <span className="font-bold" style={{ fontSize: 100 }}>“</span>
                  </div>
                  <div className="mb-16">
                    <Fade triggerOnce>
                      <Paragraph>{review.comment}</Paragraph>
                    </Fade>
                  </div>
                  <div className="flex flex-row items-end">
                    <div className="flex flex-col">
                      <Fade triggerOnce cascade>
                        <h4 className="text-2xl font-bold">{review.author}</h4>
                        <h5 className="text-lg text-black text-opacity-50">{review.label}</h5>
                      </Fade>
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
    </div>
  )
}
