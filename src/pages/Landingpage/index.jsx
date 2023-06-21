import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Universal/Hero'
import SearchDomain from '../../components/Universal/SearchDomain'
import Plans from '../../components/Universal/Plans'
import Services from '../../components/Universal/Services'
import Technical from '../../components/Universal/Technical'
import Support from '../../components/Universal/Support'
import Easy from '../../components/Universal/Easy'
import Footer from '../../components/Universal/Footer'
import Copyright from '../../components/Universal/Copyright'
import Showcase from '../../components/Universal/Showcase'

const Landingpage = () => {
  return (
    <>
      <Header />
      <Hero />
      <SearchDomain />
      <Plans />
      <Services />
      <Showcase />
      <Technical />
      <Support />
      <Easy />
      <Footer />
      <Copyright />
    </>
  )
}

export default Landingpage
