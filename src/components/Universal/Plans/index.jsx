import React from 'react'
import styles from './style.module.css'

const plans = [
  {
    title: 'Cloud Starter',
    subtitle: 'Medium traffic personal sites',
    price: 160,
    time: 'Month',
    popular: false,
    specs: [
      {
        quantity: '10GB',
        what: 'Hosted Domains'
      },
      {
        quantity: '25GB',
        what: 'RAID 10 Storage'
      },
      {
        quantity: 'Super Fast',
        what: 'SSD Storage'
      },
      {
        quantity: 'Free ',
        what: 'SSL Certificate'
      },
      {
        quantity: '',
        what: 'Dedicated IP Address'
      },
      {
        quantity: '',
        what: '24/7 Phone Support'
      }
    ]
  },
  {
    title: 'Cloud Business',
    subtitle: 'Medium traffic personal sites',
    price: 150,
    time: 'Month',
    popular: true,
    specs: [
      {
        quantity: '10GB',
        what: 'Hosted Domains'
      },
      {
        quantity: '25GB',
        what: 'RAID 10 Storage'
      },
      {
        quantity: 'Super Fast',
        what: 'SSD Storage'
      },
      {
        quantity: 'Free ',
        what: 'SSL Certificate'
      },
      {
        quantity: '',
        what: 'Dedicated IP Address'
      },
      {
        quantity: '',
        what: '24/7 Phone Support'
      }
    ]
  },
  {
    title: 'Cloud Enterprise',
    subtitle: 'Medium traffic personal sites',
    price: 170,
    time: 'Month',
    popular: false,
    specs: [
      {
        quantity: '10GB',
        what: 'Hosted Domains'
      },
      {
        quantity: '25GB',
        what: 'RAID 10 Storage'
      },
      {
        quantity: 'Super Fast',
        what: 'SSD Storage'
      },
      {
        quantity: 'Free ',
        what: 'SSL Certificate'
      },
      {
        quantity: '',
        what: 'Dedicated IP Address'
      },
      {
        quantity: '',
        what: '24/7 Phone Support'
      }
    ]
  }
]

const Plans = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Managed Our Hosting Price</h1>
        <p>
          Distinctively recaptiualize principle-centered core
          competencies through client- <br />
          centered core competencies. Enthusiastically provide access.
        </p>
        <div className={styles.plans}>
          {plans.map((item, index) => (
            <div
              data-aos="flip-left"
              key={index}
              style={{
                borderColor: item.popular && '#1cd643'
              }}
              className={styles.box}
            >
              <div className={styles.box_header}>
                <h4>{item.title}</h4>
                {item.popular && (
                  <p className={styles.popular}>Popular</p>
                )}
                <p>{item.subtitle}</p>
              </div>
              <span className={styles.price}>
                <h3>{item.price}MT</h3>/{item.time}
              </span>
              <ul>
                {item.specs.map((item, index) => (
                  <li key={index}>
                    <span>
                      <h5>{item.quantity}</h5> {item.what}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={
                  item.popular
                    ? styles.popular_button
                    : styles.normal_button
                }
              >
                Purchase now
              </button>
            </div>
          ))}
        </div>
        <h5>Choose your Compare Hosting Plans</h5>
      </div>
    </section>
  )
}

export default Plans
