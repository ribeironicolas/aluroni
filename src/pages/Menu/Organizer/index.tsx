import React, { useState } from 'react'
import styles from './Organizer.module.scss'
import options from './options.json'
import classNames from 'classnames'
import { MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'

interface Props {
  organizer: string,
  setOrganizer: React.Dispatch<React.SetStateAction<string>>
}

const Organizer = ({ organizer, setOrganizer}: Props) => {
  const [ opened, setOpened ] = useState(false)
  const organizerName = organizer && options.find(option => option.value === organizer)?.name

  return (
    <button 
      className={classNames({
        [styles.organizer]: true,
        [styles['organizer--active']]: organizer !== ''
      })} 
      onClick={() => setOpened(!opened)}
      onBlur={() => setOpened(false)}
    >
      <span>{organizerName || 'Order by'}</span>
      {opened ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} /> }
      <div className={classNames({
        [styles.organizer__options]: true,
        [styles['organizer__options--active']]: opened,
      })}>
        {options.map((option) => (
          <div className={styles.organizer__option} key={option.value}
            onClick={() => setOrganizer(option.value)}>
            {option.name}
          </div>
        ))}
      </div>
    </button>
  )
}

export default Organizer