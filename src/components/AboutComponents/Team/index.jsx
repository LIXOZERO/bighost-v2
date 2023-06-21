import React from 'react'
import styles from './style.module.css'
import { FaFacebookF } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { GrLinkedinOption } from 'react-icons/gr'

const TeamMate = [
  {
    name: 'Delfim Celestino Amisse Pastola',
    image: 'https://github.com/Denycelestino.png',
    function: 'Developer',
    social: [
      {
        icon: <FaFacebookF color="#1cd643" />,
        link: 'https://facebook.com'
      },
      {
        icon: <GrLinkedinOption color="#1cd643" />,
        link: 'https://linkedin.com'
      },
      {
        icon: <BsGithub color="#1cd643" />,
        link: 'https://github.com'
      }
    ]
  },
  {
    name: 'Lucas Alberto Fulano',
    image: 'https://github.com/waplaf.png',
    function: 'Developer',
    social: [
      {
        icon: <FaFacebookF color="#1cd643" />,
        link: 'https://facebook.com'
      },
      {
        icon: <GrLinkedinOption color="#1cd643" />,
        link: 'https://linkedin.com'
      },
      {
        icon: <BsGithub color="#1cd643" />,
        link: 'https://github.com'
      }
    ]
  },
  {
    name: 'Afonso Uapita',
    image: 'https://ui-avatars.com/api/?name=Afonso+Uapita',
    function: 'CEO & Business manager',
    social: [
      {
        icon: <FaFacebookF color="#1cd643" />,
        link: 'https://facebook.com'
      },
      {
        icon: <GrLinkedinOption color="#1cd643" />,
        link: 'https://linkedin.com'
      },
      {
        icon: <BsGithub color="#1cd643" />,
        link: 'https://github.com'
      }
    ]
  },
  {
    name: 'Telurio XXXX',
    image: 'https://ui-avatars.com/api/?name=Telurio+XXX',
    function: 'Financial technician',
    social: [
      {
        icon: <FaFacebookF color="#1cd643" />,
        link: 'https://facebook.com'
      },
      {
        icon: <GrLinkedinOption color="#1cd643" />,
        link: 'https://linkedin.com'
      },
      {
        icon: <BsGithub color="#1cd643" />,
        link: 'https://github.com'
      }
    ]
  }
]

const Team = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Meet Our Professional Team</h1>
        <p>
          Distinctively grow go forward manufactured products and
          optimal networks. Enthusiastically disseminate user-centric
          outsourcing through revolutionary
        </p>
        <div className={styles.team}>
          {TeamMate.map((item, index) => (
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration={'1500'}
              className={styles.box}
            >
              <div className={styles.image_container}>
                <img src={item.image} />
              </div>
              <div className={styles.box_content}>
                <h4>{item.name}</h4>
                <span>{item.function}</span>
                <div className={styles.social_container}>
                  {item.social.map((item, index) => (
                    <a target="_blank" href={item.link} key={index}>
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
