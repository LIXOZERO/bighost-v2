import React from 'react'
import styles from './style.module.css'
const Support = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left_container}>
          <h1>Need Some Help?</h1>
          <span>
            Whether you’re stuck or just want some tips on where to
            start, hit up our experts anytime. Sales Chat: MON-FRI
            8AM-4PM PT | Customer Support Chat: Every Day
            5:30AM–9:30PM PT
          </span>
        </div>
        <div className={styles.right_container}>
          <button>Chat with us</button>
          <button>Send us an Email</button>
        </div>
      </div>
    </section>
  )
}

export default Support
