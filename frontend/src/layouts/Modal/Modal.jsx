import React from 'react'
import ReactDom from 'react-dom'

import { CloseOutlined } from '@ant-design/icons'

import useHandleOutsideClick from '../../hooks/useHandleOutsideClick'

import Button from '../../components/Button/Button'

import styles from './styles.module.css'

function Modal({ children, onClose }) {
  const ref = useHandleOutsideClick()
  return ReactDom.createPortal(
    <div className={styles.modalContainer} ref={ref}>
      <div className={styles.modalContent}>
        <div className={styles.buttonContainer}>
          <Button variant='link' onClick={onClose}>
            <CloseOutlined />
          </Button>
        </div>
        {children}
      </div>
    </div>,
    document.getElementById('portal'),
  )
}

export default Modal
