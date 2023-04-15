import styles from './DefaultPage.module.scss'
import { Outlet } from 'react-router-dom'
import stylesTheme from 'styles/Theme.module.scss'
import React from 'react'

const DefaultPage = ({ children } : { children?: React.ReactNode}) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          The house of code and pasta
        </div>
      </header>
      <div className={stylesTheme.container}>
        <Outlet />
        {children}
      </div>
    </>
  )
}

export default DefaultPage