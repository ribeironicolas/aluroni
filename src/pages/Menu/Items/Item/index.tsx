import styles from './Item.module.scss'
import { Plate } from 'types/Plate'
import Tags from 'components/Tags'
import { useNavigate } from 'react-router-dom'

const Item = (props: Plate) => {
  const {id, title, photo, description} = props
  const navigate = useNavigate()
  return (
    <div className={styles.item} onClick={() => navigate(`/plate/${id}`)}>
      <div className={styles.item__image}> 
        <img src={process.env.PUBLIC_URL + photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item_titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Tags {...props} />
      </div>
    </div>
  )
}

export default Item