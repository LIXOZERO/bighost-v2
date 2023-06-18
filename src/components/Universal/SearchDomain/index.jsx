import styles from './style.module.css'
import { IoSearch } from 'react-icons/io5'
import Com from './assets/com.png'
import Net from './assets/net.png'
import Org from './assets/org.png'
import Online from './assets/online.png'
import Store from './assets/store.png'
import BG from './assets/map-bg.png'
import { Link } from 'react-router-dom'
const Domains = [
  {
    image: Com,
    price: '160'
  },
  {
    image: Net,
    price: '160'
  },
  {
    image: Online,
    price: '160'
  },
  {
    image: Org,
    price: '160'
  },
  {
    image: Store,
    price: '160'
  }
]

const SearchDomain = () => {
  return (
    <div className={styles.container}>
      <img className={styles.bg} src={BG} />
      <div data-aos="zoom-in" className={styles.content}>
        <h1>Search Unique Domain!</h1>
        <p>
          Get your perfect domain name starting from 160 MT for the
          first year and <br />
          free domain privacy included build.
        </p>
        <div className={styles.input_container}>
          <input type="text" placeholder="exemplo.com" />
          <Link to={'/domain'}>
            <IoSearch color="#FFF" /> Pesquisar
          </Link>
        </div>
        <div className={styles.domain_container}>
          {Domains.map((item, index) => (
            <div className={styles.image_container} key={index}>
              <img src={item.image} />
              <p>{item.price} MT</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchDomain
