import React from 'react'
import styles from './style.module.css'
import qpay from './assets/qpay.png'
import payent from './assets/payent.png'
import payfa from './assets/payfa.png'
import payfa2 from './assets/payfa2.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.secured}>
          <h4>Secured</h4>
          <div className={styles.secured_contaner}>
            <div className={styles.box_image}>
              <img src={qpay} />
            </div>
            <div className={styles.box_image}>
              <img src={payent} />
            </div>
            <div className={styles.box_image}>
              <img src={payfa} />
            </div>
            <div className={styles.box_image}>
              <img src={payfa2} />
            </div>
          </div>
        </div>
        <div className={styles.link_container}>
          <h4>PRODUCTS</h4>

          <ul>
            <Link> Shared Hosting</Link>
            <Link>WordPress Hosting</Link>
            <Link>Virtual Private Servers</Link>
            <Link> Dedicated Servers</Link>
            <Link> Domain Names</Link>
          </ul>
        </div>
        <div className={styles.link_container}>
          <h4>COMPANY</h4>

          <ul>
            <Link>About</Link>
            <Link>Affiliates</Link>
            <Link>Blog</Link>
            <Link>Carrers</Link>
            <Link>Community</Link>
          </ul>
        </div>
        <div className={styles.link_container}>
          <h4>LEGAL</h4>

          <ul>
            <Link>Legal Information</Link>
            <Link>Privacy Policy</Link>
            <Link>Report Abuse</Link>
            <Link>Terms of Service</Link>
            <Link>WHOIS Lookup</Link>
          </ul>
        </div>
        <div className={styles.link_container}>
          <h4>SUPPORT</h4>

          <ul>
            <Link>Contact</Link>
            <Link>Knowlodge Base</Link>
            <Link>Forums</Link>
            <Link>System status</Link>
            <Link>Support Team</Link>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
