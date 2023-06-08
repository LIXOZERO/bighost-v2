import React from 'react'
import styles from './style.module.css'
import { FaServer } from 'react-icons/fa'
import { RxDoubleArrowRight } from 'react-icons/rx'
import { GiSettingsKnobs } from 'react-icons/gi'
import { FaDatabase } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { BiSupport, BiDirections } from 'react-icons/bi'

import { Link } from 'react-router-dom'

const services = [
  {
    icon: <FaServer color="#1cd643" size={24} />,
    title: 'Shared Hosting',
    links: [
      'Flexible, Easy to Use Control Panel',
      'Unmetered Bandwidth',
      'Unmetered Sub Domains, FTP Accounts',
      '99% Uptime Guarantee',
      '45-Day Money-Back Guarantee'
    ]
  },
  {
    icon: <GiSettingsKnobs color="#1cd643" size={24} />,
    title: 'cPanel Control Panel',
    links: [
      'Latest cPanel Web Hosting Control Panel',
      'Webalizer, Raw Log Manager with Error Logs',
      'Unmetered Sub Domains, FTP Accounts',
      '99% Uptime Guarantee',
      '45-Day Money-Back Guarantee'
    ]
  },
  {
    icon: <FaDatabase color="#1cd643" size={24} />,
    title: 'Programming & Databases',
    links: [
      'Latest cPanel Web Hosting Control Panel',
      'Webalizer, Raw Log Manager with Error Logs',
      'Unmetered Sub Domains, FTP Accounts',
      '99% Uptime Guarantee',
      '45-Day Money-Back Guarantee'
    ]
  },
  {
    icon: <MdEmail color="#1cd643" size={24} />,
    title: 'Email Features',
    links: [
      'Unlimited POP3 Email Accounts with SMTP',
      'WebMail Access: Horde, RoundCube',
      'Unmetered Sub Domains, FTP Accounts',
      '99% Uptime Guarantee',
      '45-Day Money-Back Guarantee'
    ]
  },
  {
    icon: <BiSupport color="#1cd643" size={24} />,
    title: 'Award-Winning Supports',
    links: [
      'Unlimited POP3 Email Accounts with SMTP',
      'WebMail Access: Horde, RoundCube',
      'Unmetered Sub Domains, FTP Accounts',
      '99% Uptime Guarantee',
      '45-Day Money-Back Guarantee'
    ]
  },
  {
    icon: <BiDirections color="#1cd643" size={24} />,
    title: 'Application Hosting Plan',
    links: [
      'Unlimited POP3 Email Accounts with SMTP',
      'WebMail Access: Horde, RoundCube',
      'Unmetered Sub Domains, FTP Accounts',
      '99% Uptime Guarantee',
      '45-Day Money-Back Guarantee'
    ]
  }
]

const Technical = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1>We Have a Hosting Solution For You</h1>
        <p>
          Synergistically architect plug-and-play without
          next-generation manufactured <br /> products. Assertively
          develop synergistic networks.
        </p>
        <div className={styles.solution_container}>
          {services.map((item, index) => (
            <div
              data-aos="zoom-out-down"
              key={index}
              className={styles.box}
            >
              {item.icon}
              <h4>{item.title}</h4>
              <ul>
                {item.links.map((item, index) => (
                  <li key={index}>
                    <RxDoubleArrowRight color="#1cd643" size={10} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technical
