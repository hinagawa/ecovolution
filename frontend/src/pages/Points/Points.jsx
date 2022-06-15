/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { PlusOutlined } from '@ant-design/icons'

import Input from '../../components/Input/Input'
import Modal from '../../layouts/Modal/Modal'
import Header from '../../layouts/Header/Header'
import Button from '../../components/Button/Button'

import styles from './styles.module.css'

function Points() {
  const [isOpen, setIsOpen] = useState(false)

  const userRole = useSelector(
    (state) => state.user.user.role,
  )
  const score = 1000
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.score}>
        <h2>
          {' '}
          У Вас на счету
          {' '}
          {score}
          {' '}
          эко-баллов
        </h2>
      </div>
      <div className={styles.pointContainer}>
        <div className={styles.point}>
          <h1>Vegan Day</h1>
          <p className={styles.placeDescription}>
            Скидка 10% при заказе от 300 рублей
          </p>
          <Button>
            1000 эко-баллов
          </Button>
        </div>
        <div className={styles.point}>
          <h1>Surf Coffee</h1>
          <p className={styles.placeDescription}>
            Бесплатный кофе
          </p>
          <Button disabled>
            2100 эко-баллов
          </Button>
        </div>
      </div>
      {userRole === '' && (
        <div className={styles.buttonContainer}>
          <Button
            variant='primary'
            shape='circle'
            onClick={() => setIsOpen(true)}
          >
            <PlusOutlined />
          </Button>
        </div>
      )}
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <div>
            <h3>Название места</h3>
            <Input
              placeholder='Название места'
            />
            <h3>Описание скидки</h3>
            <Input
              placeholder='Описание скидки'
            />
            <h3>Количество баллов</h3>
            <Input
              placeholder='Количество баллов'
            />
          </div>
        </Modal>
      )}
    </div>
  )
}

export default Points
