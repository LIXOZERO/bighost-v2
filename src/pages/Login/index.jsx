import React from 'react'
import styles from './style.module.css'
import { AiOutlineMail } from 'react-icons/ai'
import { CiLock } from 'react-icons/ci'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
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
          className={styles.wrapper_login}
        >
          <h2>Sign In</h2>
          <p>Sign in to your account to continue.</p>

          <form className={styles.form_container}>
            <div className={styles.label_container}>
              <label>Email Address</label>
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
              <Link to={'/recovery-account'}>Forgot password?</Link>
            </div>
            <div className={styles.input}>
              <CiLock className={styles.icon} size={30} />
              <input
                required
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <button>Sign in</button>
            <p className={styles.signup_question}>
              Don't have an account yet?{' '}
              <Link to={'/signup'}>Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
