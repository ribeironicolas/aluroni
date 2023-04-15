import React from 'react'
import styles from './Searcher.module.scss'
import { CgSearch } from 'react-icons/cg'

interface Props {
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Searcher = ({ search, setSearch}: Props) => {
  return (
    <div className={styles.searcher}>
      <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      <CgSearch 
        size={20}
        color="#4C4D5E"
      />
    </div>
  )
}

export default Searcher