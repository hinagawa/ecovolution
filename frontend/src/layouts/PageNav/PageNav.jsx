import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../components/Link/Link'

import styles from './styles.module.css'

function PageNav({ navArray }) {
  return (
    <div className={styles.navContainer}>
      {navArray.map((navElement) => (
        <div className={styles.navElement}>
          <Link href='/'>{navElement}</Link>
        </div>
      ))}
    </div>
  )
}

PageNav.propTypes = {
  navArray: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default PageNav
