import React from 'react'
import styles from './style.module.css'

const Wrapper = ({ flexDirection, width, children }) => {
  return (
    <div
      className={styles.wrapper}
      style={{ flexDirection: flexDirection, width: width }}
    >
      {children}
    </div>
  )
}

export default Wrapper
