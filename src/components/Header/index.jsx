import React, { useState } from 'react'
import Logo from './assets/logo2.svg'
import styles from './style.module.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Header = () => {
  const [handleMobile, setHandleMobile] = useState(false)

  return (
    <header>
      <nav className={styles.wrapper}>
        <div data-aos="zoom-in" className={styles.logo_container}>
          <img src={Logo} />
        </div>
        <ul className={styles.desktop_menu}>
          <Link>Home</Link>
          <Link>Hosting</Link>
          <Link>Support</Link>
          <Link className={styles.button}>Get started</Link>
        </ul>

        {/* Mobile menu */}
        {handleMobile && (
          <ul data-aos="fade-down" className={styles.mobile_menu}>
            <Link>Home</Link>
            <Link>Hosting</Link>
            <Link>Support</Link>
            <Link className={styles.button}>Get started</Link>
          </ul>
        )}

        <div className={styles.button_mobile}>
          {handleMobile ? (
            <AiOutlineClose
              onClick={() => setHandleMobile(!handleMobile)}
              color="#FFF"
              size={30}
            />
          ) : (
            <RxHamburgerMenu
              onClick={() => setHandleMobile(!handleMobile)}
              color="#FFF"
              size={30}
            />
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
