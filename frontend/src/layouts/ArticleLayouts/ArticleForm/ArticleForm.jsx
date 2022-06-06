import React, { useState } from 'react'

import { Editor } from 'react-draft-wysiwyg'

import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import styles from './styles.module.css'

function ArticleForm() {
  const [nextStep, setNextStep] = useState(false)
  return (
    <>
      {!nextStep && (
        <div className={styles.formContainer}>
          <Input placeholder='Заголовок статьи' />
          <Editor />
          <Button
            variant='primary'
            onClick={() => setNextStep(true)}
          >
            Далее
          </Button>
        </div>
      )}
      {nextStep && (
        <div className={styles.formContainer}>
          <h1>ssss</h1>
          <Button
            variant='primary'
            onClick={() => setNextStep(false)}
          >
            Назад
          </Button>
        </div>
      )}
    </>
  )
}

export default ArticleForm
