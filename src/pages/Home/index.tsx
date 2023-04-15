import menu from 'data/menu.json'
import styles from './Home.module.scss'
import stylesTheme from 'styles/Theme.module.scss'
import ourHouse from 'assets/nossa_casa.png'
import { useNavigate } from 'react-router-dom'
import { Plate } from 'types/Plate'

const Home = () => {
  let recommendedPlates = [...menu]
  recommendedPlates = recommendedPlates.sort(() => 0.5 - Math.random()).splice(0,3)
  const navigate = useNavigate()

  function redirectToDetails(plate: Plate) {
    navigate(`/plate/${plate.id}`, {state: {plate}, replace: true })
  }
  return (
    <section>
      <h3 className={stylesTheme.title}>
        Kitchen recommendations
      </h3>
      <div className={styles.recommendations}>
        {recommendedPlates.map(item => (
          <div key={item.id} className={styles.recommended}>
            <div className={styles.recommended__image}>
              <img src={process.env.PUBLIC_URL + item.photo} alt={item.title} />
            </div>
            <button 
              className={styles.recommended__button}
              onClick={() => redirectToDetails(item)}
            >
              See more
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTheme.title}> Our House </h3>
      <div className={styles.ourHouse}>
        <img src={ourHouse} alt="Aluroni's House" />
        <div className={styles.ourHouse__address}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  )
}

export default Home