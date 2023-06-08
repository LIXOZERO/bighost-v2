import React from 'react'
import styles from './style.module.css'
import Builder from './assets/builder.svg'
import Cloud from './assets/cloud.svg'
import Hosting from './assets/hosting.svg'
import Shared from './assets/shared.svg'
import Vps from './assets/vps.svg'
import Wordpress from './assets/wordpress.svg'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const services = [
  {
    image: Shared,
    title: 'Shared Hosting',
    text: 'Our most popular product! Shared Web Hosting gives you a fast SSD storage hosting.',
    price: '$2.59/mo'
  },
  {
    image: Hosting,
    title: 'WordPress Hosting',
    text: 'Get up and running fast with Optimized performance easy maintenance hosting.',
    price: '$2.59/mo'
  },
  {
    image: Builder,
    title: 'VPS Hosting',
    text: 'Virtual Private Servers with ultra-fast SSDs and flexibility, Ubuntu, IPv6, Nginx and more.',
    price: '$2.59/mo'
  },
  {
    image: Wordpress,
    title: 'WP Website Builder',
    text: 'Virtual Private Servers with ultra-fast SSDs and flexibility, Ubuntu, IPv6, Nginx and more.',
    price: '$2.59/mo'
  },
  {
    image: Vps,
    title: 'VPS Hosting',
    text: 'Virtual Private Servers with ultra-fast SSDs and flexibility, Ubuntu, IPv6, Nginx and more.',
    price: '$2.59/mo'
  },
  {
    image: Cloud,
    title: 'Cloud Hosting',
    text: 'Virtual Private Servers with ultra-fast SSDs and flexibility, Ubuntu, IPv6, Nginx and more.',
    price: '$2.59/mo'
  }
]

const Services = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1>We Have a Hosting Solution For You</h1>
        <p>
          Synergistically architect plug-and-play without
          next-generation manufactured <br /> products. Assertively
          develop synergistic networks.
        </p>
        <div className={styles.service_container}>
          {services.map((item, index) => (
            <div key={index} className={styles.box}>
              <div className={styles.image_container}>
                <img src={item.image} />
              </div>

              <h4>{item.title}</h4>
              <div className={styles.box_container}>
                <p>{item.text}</p>
                <span>
                  Starting at: <h5>{item.price}</h5>
                </span>
              </div>

              <Link>
                View details <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
