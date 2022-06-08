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
    'Утилизация и переработка отходов',
    'Экология',
  ]).isRequired,
}
export default Label
