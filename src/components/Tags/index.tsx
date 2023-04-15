import classNames from 'classnames'
import { Plate } from 'types/Plate'
import styles from './Tags.module.scss'

const Tags = ({
  category,
  size,
  serving,
  price
}: Plate) => {
  return (
    <div className={styles.tags}>
      <div 
        className={classNames({
          [styles.tags__type]: true,
          [styles[`tags__type__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={styles.tags__portion}>
        {size}g
      </div>
      <div className={styles.tags__amountofpeoples}>
        Serves {serving} people
      </div>
      <div className={styles.tags__price}>
        R${price.toFixed(2)}
      </div>
    </div>
  )
}

export default Tags