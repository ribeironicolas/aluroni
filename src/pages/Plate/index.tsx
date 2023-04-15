import { useNavigate, useParams } from 'react-router-dom'
import styles from './Plate.module.scss'
import menu from 'data/menu.json'
import Tags from 'components/Tags'
import NotFound from 'pages/NotFound'
import DefaultPage from 'components/DefaultPage'

const Plate = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const plate = menu.find(item => item.id === Number(id))
  if(!plate) {
    return <NotFound />
  }

  return (
    <DefaultPage>
      <button className={styles.back} onClick={() => navigate(-1)}>{'< Back'}</button>
      <section className={styles.container}>
        <h1 className={styles.title}>{plate.title}</h1>
        <div className={styles.image}>
          <img src={process.env.PUBLIC_URL + plate.photo} alt={plate.title} />
        </div>
        <div className={styles.content}>
          <p className={styles.content__description}>
            {plate.description}
          </p>
          <Tags {...plate}/>
        </div>
      </section>
    </DefaultPage>
  )
}

export default Plate