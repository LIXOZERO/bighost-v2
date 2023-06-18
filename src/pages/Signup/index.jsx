import React from 'react'
import styles from './style.module.css'
import { AiOutlineMail } from 'react-icons/ai'
import { CiLock } from 'react-icons/ci'
import { IoPersonOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <div className={styles.overlay_image} />
        <div data-aos="fade-right" className={styles.wrapper}>
          <h1>Welcome Back !</h1>
          <span>
            Keep your face always toward the sunshine - and shadows
            will fall behind you. Continually pursue fully researched
            niches whereas timely platforms. Credibly parallel task
            optimal catalysts for change after focused catalysts for
            change.
          </span>
        </div>
      </div>
      <div className={styles.right_container}>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="800"
          className={styles.wrapper_signup}
        >
          <h2>Sign Up</h2>
          <p>Made with love by developers for developers.</p>

          <form className={styles.form_container}>
            <div className={styles.label_container}>
              <label>Your name/Business name</label>
            </div>

            <div className={styles.input}>
              <IoPersonOutline className={styles.icon} size={30} />
              <input
                required
                type="text"
                placeholder="bighost company"
              />
            </div>
            <div className={styles.input}>
              <AiOutlineMail className={styles.icon} size={30} />
              <input
                required
                type="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div className={styles.label_container}>
              <label>Password</label>
              <label>Forgot password?</label>
            </div>
            <div className={styles.input}>
              <CiLock className={styles.icon} size={30} />
              <input
                required
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <button>Sign up</button>
            <p className={styles.signup_question}>
              Don't have an account yet?{' '}
              <Link to={'/login'}>signin</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
