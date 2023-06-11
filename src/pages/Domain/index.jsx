import React from 'react'
import styles from './style.module.css'
import Header from '../../components/Header'
import Card from './assets/card.svg'
import Paypal from './assets/paypal.svg'
import { MdDone } from 'react-icons/md'
import { IoLockClosedSharp } from 'react-icons/io5'
const payments = [
  {
    name: 'Credit Card',
    image: Card
  },
  { name: 'Paypal', image: Paypal }
]
const whatpay = [
  {
    name: 'Domain registration - 1 Year',
    discount: 200,
    price: 150
  },
  {
    name: 'Domain Privacy Protection',
    discount: null,
    price: 0
  }
]
const plandiscount = [
  {
    name: 'Plan Discount - 97%',
    discount: -200
  },
  {
    name: 'Taxes & Fees',
    discount: 0.18
  }
]
const Domain = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <h1>You’re almost there! Complete your order</h1>
        <h1>1. Choose a period</h1>
        <div className={styles.domain_container}>
          <h3 className={styles.host_choose}>bighost.co.mz</h3>
          <div className={styles.domain_container_secondary}>
            <div className={styles.first_description}>
              <h3>.CO.MZ Domain Registration</h3>
              <p>Registration renews at $34.99/year on 11/06/2024</p>
            </div>
            <div className={styles.middle_container}>
              <div className={styles.middle_}>
                <select>
                  <option>1 YEar</option>
                </select>
                <p>Domain renews annualy</p>
              </div>
              <span>SAVE 97%</span>
            </div>
            <div className={styles.first_price}>
              <h3>150MT</h3>
              <p>200MT</p>
            </div>
          </div>
          <div className={styles.domain_container_third}>
            <div className={styles.domain_container_third_first}>
              <h4>FREE</h4>
              <span>domain privacy protection included</span>
            </div>
            <h4>MT 0.00</h4>
          </div>
        </div>

        <div className={styles.payment_container}>
          <h1>2. Select payment</h1>
          <div className={styles.payment_container_content}>
            <div className={styles.left_container}>
              {payments.map((item, index) => (
                <div key={index} className={styles.box_type_payments}>
                  <div className={styles.box_first_container}>
                    <input type="radio" />
                    <h4>{item.name}</h4>
                  </div>

                  <img src={item.image} />
                </div>
              ))}
            </div>
            <div className={styles.right_container}>
              <h4>Domain</h4>
              <div className={styles.right_container_header}>
                {whatpay.map((item, index) => (
                  <div key={index} className={styles.what_pay}>
                    <p>
                      <MdDone color="green" />
                      {item.name}
                    </p>
                    <div className={styles.gap_header_price}>
                      {item.discount != null && (
                        <span>{item.discount} MT</span>
                      )}
                      <h4>{item.price} MT</h4>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className={styles.right_container_secondary_container}
              >
                <select>
                  <option>Mozambique</option>
                  <option>Angola</option>
                </select>
                {plandiscount.map((item, index) => (
                  <div
                    className={styles.secondary_option}
                    key={index}
                  >
                    <p>{item.name}</p>
                    <span
                      style={{
                        color: item.discount < 0 && 'green',
                        fontWeight: item.discount < 0 && 'bold'
                      }}
                    >
                      {item.discount} MT
                    </span>
                  </div>
                ))}
              </div>

              <div className={styles.right_container_third_container}>
                <div
                  className={
                    styles.right_container_third_container_header
                  }
                >
                  <h4>Total</h4>

                  <div>
                    <span>200MT</span>
                    <h4>150MT</h4>
                  </div>
                </div>
                <h4 className={styles.cupon}>Have a coupon code?</h4>
              </div>
              <div className={styles.last_right_container}>
                <div className={styles.last_right_container_header}>
                  <button>Submit Secure Payment</button>
                  <p>
                    {' '}
                    <IoLockClosedSharp color="#1cd643" /> Encrypted
                    and Secure Payments
                  </p>
                </div>
                <span>
                  By checking out you agree with our Terms of Service
                  and confirm that you have read our Privacy Policy.
                  You can cancel recurring payments at any time.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Domain
