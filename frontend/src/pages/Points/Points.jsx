/* eslint-disable no-underscore-dangle */
import React from 'react'

import Header from '../../layouts/Header/Header'
import Button from '../../components/Button/Button'

import styles from './styles.module.css'

function Points() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.pointContainer}>
        <h1>Vegan Day</h1>
        <p className={styles.placeDescription}>
          Скидка 10% при заказе от 300 рублей
        </p>
        <Button>
          1000 эко-баллов
        </Button>
      </div>
      <div className={styles.pointContainer}>
        <h1>Surf Coffee</h1>
        <p className={styles.placeDescription}>
          Бесплатный кофе
        </p>
        <Button>
          2100 эко-баллов
        </Button>
      </div>
    </div>
  )
}

export default Points
