import React from 'react'
import styles from './style.module.css'
import { MdOutlineDone } from 'react-icons/md'
import BG from './assets/bg.png'
const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left_container}>
          <h1>
            Fully Managed <br />
            Hosting Services
          </h1>
          <span>
            Globally parallel task granular alignments through
            excellent intellectual capital. Globally deploy vertical
            leadership.
          </span>
          <ul data-aos="zoom-out">
            <li>
              {' '}
              <MdOutlineDone size={20} color="#FFF" />
              Easy to use no technical skills required
            </li>
            <li>
              {' '}
              <MdOutlineDone size={20} color="#FFF" />
              Thousands of customizable design
            </li>
            <li>
              {' '}
              <MdOutlineDone size={20} color="#FFF" />
              Zero-Risk Money-Back Guarantee
            </li>
            <li>
              {' '}
              <MdOutlineDone size={20} color="#FFF" />
              Free domain with install
            </li>
          </ul>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className={styles.buttons_container}
          >
            <button>Get started now</button>
            <button>See Price Plan</button>
          </div>
        </div>
        <div className={styles.right_container}>
          <img src={BG} />
        </div>
      </div>
    </div>
  )
}

export default Hero
