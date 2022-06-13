import React, { useState } from 'react'
import { Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

import Label from '../../../components/Label/Label'
import Link from '../../../components/Link/Link'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'

import { storage } from '../../../services/firebase'

import styles from './styles.module.css'

function ArticleForm() {
  const [fileUrl, setFileUrl] = useState()
  const [nextStep, setNextStep] = useState(false)
  const [headerInput, setHeaderInput] = useState('')
  const [editorState, setEditorState] = useState()

  const handleChange = async ({ file }) => {
    const fileName = file.size + file.name
    if (file.status === 'removed') {
      const imageRef = storage.ref(`${fileName}`)
      await imageRef
        .delete()
        .catch((err) => console.log(err))
    } else {
      const snapshot = await storage.ref(fileName).put(file)
      await snapshot.ref
        .getDownloadURL()
        .then((data) => setFileUrl(data))
    }
  }

  console.log(headerInput, editorState, fileUrl)
  return (
    <>
      {!nextStep && (
        <div className={styles.formContainer}>
          <h3>Заголовок</h3>
          <Input
            placeholder='Заголовок статьи'
            onChange={(e) => setHeaderInput(e.target.value)}
          />
          <h3>Текст статьи</h3>
          <textarea
            onChange={(e) => {
              setEditorState(e.target.value)
            }}
          />
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
          <div>
            <h3>Загрузите превью статьи</h3>
            <Upload
              defaultFileList={[]}
              beforeUpload={() => false}
              listType='picture'
              maxCount={1}
              onChange={(e) => handleChange(e)}
            >
              <Button icon={<UploadOutlined />}>
                Загрузить
              </Button>
            </Upload>
          </div>
          <div>
            <h3>
              Добавьте теги, чтобы Вашу статью было легко
              найти
            </h3>
            <Label variant='Туториал' />
            <Label variant='Лайфхак' />
            <Label variant='Рецепт' />
            <Link href='/'>Посмотреть больше тегов</Link>
          </div>
          <div className={styles.buttonContainter}>
            <Button
              variant='primary'
              onClick={() => setNextStep(false)}
            >
              Назад
            </Button>
            <Button
              variant='primary'
              onClick={() => setNextStep(false)}
            >
              Создать
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default ArticleForm
