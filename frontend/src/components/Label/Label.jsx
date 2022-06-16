import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

function Label({ variant }) {
  return (
    <span className={`${styles.label}`}>
      {variant}
    </span>
  )
}

Label.propTypes = {
  variant: PropTypes.oneOf([
    'Рецепт',
    'Туториал',
    'Место',
    'Событие',
    'Лайфхак',
    'Переработка и утилизация мусора',
    'Осознанное потребление и экологичный образ жизни',
    'Озеленение лесов и парков',
  ]).isRequired,
}
export default Label
