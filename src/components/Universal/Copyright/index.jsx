import React from 'react'
import styles from './style.module.css'
const Copyright = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <p>
          Copyrights © 2023. All rights reserved by{' '}
          <span>BigHost</span>
        </p>
      </div>
    </section>
  )
}

export default Copyright
