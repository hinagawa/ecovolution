import React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import { Upload } from 'antd'

import Label from '../../../components/Label/Label'
import Link from '../../../components/Link/Link'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'

import styles from './styles.module.css'

function ArticleForm() {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ])

  const [nextStep, setNextStep] = useState(false)
  const [headerInput, setHeaderInput] = useState('')
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }
  const onPreview = async (file) => {
    let src = file.url

    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)

        reader.onload = () => resolve(reader.result)
      })
    }

    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow?.document.write(image.outerHTML)
  }
  console.log(headerInput)
  return (
    <>
      {!nextStep && (
        <div className={styles.formContainer}>
          <div>
            <h3>Заголовок</h3>
            <Input
              placeholder='Заголовок статьи'
              onChange={(e) => setHeaderInput(e.target.value)}
            />
            <h3>Текст статьи</h3>
            <Editor />
          </div>
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
              action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
              listType='picture-card'
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
              maxCount={1}
            >
              {fileList.length < 5 && '+ Upload'}
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
