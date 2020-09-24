import Clients from '../containers/Clients'
import ContactUs from '../containers/ContactUs'
import Footer from '../containers/Footer'
import Header from '../containers/Header'
import Navbar from '../containers/Navbar'
import Projects from '../containers/Projects'
import Reviews from '../containers/Reviews'
import Services from '../containers/Services'
import Welcome from '../containers/Welcome'

const SECTIONS = [
  Header,
  Navbar,
  Welcome,
  Projects,
  Clients,
  Services,
  Reviews,
  ContactUs,
  Footer,
]

export default function Home() {
  return (
    <div>
      {SECTIONS.map((Section, index) => <Section key={index} />)}
    </div>
  )
}
