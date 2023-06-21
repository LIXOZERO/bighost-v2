import React from 'react'
import HeaderAbout from '../../components/AboutComponents/HeaderAbout'
import Header from '../../components/Header'

import styles from './style.module.css'
import HeroAbout from '../../components/AboutComponents/HeroAbout'
import Team from '../../components/AboutComponents/Team'
import Footer from '../../components/Universal/Footer'
import Copyright from '../../components/Universal/Copyright'

const About = () => {
  return (
    <>
      <Header />
      <HeaderAbout />
      <HeroAbout />
      <Team />
      <Footer />
      <Copyright />
    </>
  )
}

export default About
