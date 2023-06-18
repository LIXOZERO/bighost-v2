import React from 'react'
import styles from './style.module.css'
import BG from './assets/girl-with-marketplace.png'
import { Link } from 'react-router-dom'
const Showcase = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <img data-aos="fade-right" src={BG} />
      </div>
      <div className={styles.right_container}>
        <div data-aos="fade-left" className={styles.wrapper}>
          <h3>CREATE A WEBSITE</h3>
          <h1>
            PICK YOUR PATH TO A <br /> BRAND NEW WEBSITE
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ullam velit odit eveniet amet eius sit maxime, ex atque
            blanditiis pariatur reiciendis minima perspiciatis odio
            nisi laborum doloremque, obcaecati, a ipsum. .
          </p>

          <div className={styles.services}>
            <h3>Web hosting</h3>
            <p>
              What your domain name for free? Pair it with our
              reliable hosting and it's on us for the first year.
            </p>
            <div className={styles.services_button}>
              <Link>learn more</Link>
              <span className={styles.price}>
                {' '}
                As low as 160 MT/mo
              </span>
            </div>
          </div>
          <div className={styles.services}>
            <h3>Website Builder</h3>
            <p>
              What your domain name for free? Pair it with our
              reliable hosting and it's on us for the first year.
            </p>
            <div className={styles.services_button}>
              <Link>learn more</Link>
              <span className={styles.price}>
                {' '}
                As low as 180 MT/mo
              </span>
            </div>
          </div>
          <div className={styles.services}>
            <h3>Domain Register</h3>
            <p>
              What your domain name for free? Pair it with our
              reliable hosting and it's on us for the first year.
            </p>
            <div className={styles.services_button}>
              <Link>learn more</Link>
              <span className={styles.price}>
                {' '}
                As low as 180 MT/mo
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Showcase
