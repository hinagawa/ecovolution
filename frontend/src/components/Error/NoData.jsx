import React from 'react'

import { FrownTwoTone } from '@ant-design/icons'

import styles from './styles.module.css'

function NoData() {
  return (
    <div className={styles.imgPosition}>
      <FrownTwoTone twoToneColor='#10BC69' />
      <p className={styles.noDataText}>
        Похоже, что здесь ничего нет
      </p>
    </div>
  )
}

export default NoData
