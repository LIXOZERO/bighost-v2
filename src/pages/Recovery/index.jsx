import React from 'react'
import styles from './style.module.css'
import { AiOutlineMail } from 'react-icons/ai'
import { CiLock } from 'react-icons/ci'
import { Link } from 'react-router-dom'
const Recovery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <div data-aos="fade-right" className={styles.wrapper}>
          <h1>Recovery your account!</h1>
          <span>
            1. Keep your face always toward the sunshine - and shadows
            will fall behind you. Continually pursue fully researched
            niches whereas timely platforms. Credibly parallel task
            optimal catalysts for change after focused catalysts for
            change.
          </span>
          <span>
            2. Keep your face always toward the sunshine - and shadows
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
          className={styles.wrapper_login}
        >
          <h2>Password Reset</h2>
          <p>Enter your email to get a password reset link.</p>

          <form className={styles.form_container}>
            <div className={styles.input}>
              <AiOutlineMail className={styles.icon} size={30} />
              <input
                required
                type="email"
                placeholder="example@gmail.com"
              />
            </div>

            <button>Reset passsword</button>
            <p className={styles.signup_question}>
              Already have account ?{' '}
              <Link to={'/login'}>sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Recovery
