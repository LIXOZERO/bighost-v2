import React from 'react'
import styles from './style.module.css'
import BG from './assets/icon-shared-hosting.svg'
import { Link } from 'react-router-dom'
const features = [
  {
    title: 'Exclusive Features',
    features: [
      'Daily Backups & free backup restore',
      'Security Updates and Patching',
      'Performance and resource monitoring',
      'Step-by-step Tutorials & Knowledgebase'
    ]
  },
  {
    title: 'WordPress Services',
    features: [
      '1-click WordPress Installation',
      'Free WordPress Transfer',
      'Themes and plugins installation',
      'Malware Scan & Reports'
    ]
  }
]

const HeroAbout = () => {
  return (
    <div className={styles.container}>
      <div data-aos="fade-right" className={styles.wrapper}>
        <div className={styles.left_container}>
          <h1>We Make Sure Your Website is Fast</h1>
          <p>
            Efficiently reintermediate long-term high-impact channels
            without equity invested technology. Quickly brand backend
            web-readiness without cross-platform e-services.
          </p>

          <div className={styles.left_container_wrapper}>
            {features.map((item, index) => (
              <div className={styles.box} key={index}>
                <h4>{item.title}</h4>
                <ul>
                  {item.features.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                {index == 0 && (
                  <div className={styles.buttons}>
                    <Link>Start Now</Link>
                    <Link>Princing Plans</Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.right_container}>
          <img src={BG} />
        </div>
      </div>
    </div>
  )
}

export default HeroAbout
