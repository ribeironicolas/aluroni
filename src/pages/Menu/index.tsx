import React, { useState } from 'react'
import styles from './Menu.module.scss'
import Searcher from './Searcher'
import Filters from './Filters'
import Organizer from './Organizer'
import Items from './Items'
import stylesTheme from 'styles/Theme.module.scss'

const Menu = () => {
  const [ search, setSearch ] = useState('')
  const [ filter, setFilter ] = useState<number | null>(null)
  const [ organizer, setOrganizer ] = useState('')

  return (
    <section className={styles.menu}>
      <h3 className={stylesTheme.title}>Menu</h3>
      <Searcher 
        search={search}
        setSearch={setSearch}
      />
      <div className={styles.menu__filters}>
        <Filters filter={filter} setFilter={setFilter}/>
        <Organizer organizer={organizer} setOrganizer={setOrganizer}/>
      </div>
      <Items search={search} filter={filter} organizer={organizer}/>
    </section>
  )
}

export default Menu