/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react'
import { Upload, Button, Spin } from 'antd'
import { UploadOutlined,
  CheckCircleTwoTone } from '@ant-design/icons'
import { useSelector } from 'react-redux'

import Label from '../../../components/Label/Label'
import Input from '../../../components/Input/Input'
import MyButton from '../../../components/Button/Button'
import Form from '../../../components/Form/Form'

import api from '../../../services/api/fetchWrapper'

import { storage } from '../../../services/firebase'

import styles from './styles.module.css'

function ArticleForm() {
  const [fileUrl, setFileUrl] = useState()
  const [nextStep, setNextStep] = useState(false)
  const [articleName, setArticleName] = useState('')
  const [articleText, setArticleText] = useState('')
  const [error, setError] = useState('')
  const [show, setShow] = useState(false)

  const currentUser = useSelector(
    (state) => state.user.user._id,
  )

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (fileUrl) {
      await api
        .post('api/article/create', {
          articleName,
          articleText,
          firebasePath: fileUrl,
          tagsArray: ['Озеленение лесов и парков'],
          articleAuthorId: currentUser,
        })
        .then((data) => (data.success ? setError(false) : setError(true)))
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 20000)
    return () => clearTimeout(timer)
  }, [])

  console.log(error)
  return (
    <>
      <Form onSubmit={handleSubmit}>
        {!nextStep && (
          <div className={styles.formContainer}>
            <p>
              Напишите статью на тему Озеленение лесов и
              парков и получите 100 эко-баллов
            </p>
            <h3>Заголовок</h3>
            <Input
              placeholder='Заголовок статьи'
              onChange={(e) => setArticleName(e.target.value)}
            />
            <h3>Текст статьи</h3>
            <textarea
              rows='11'
              className={styles.textarea}
              onChange={(e) => {
                setArticleText(e.target.value)
              }}
            />
            <MyButton
              variant='primary'
              onClick={() => setNextStep(true)}
              disabled={!(articleText && articleName)}
            >
              Далее
            </MyButton>
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
                К Вашей статье буду применены следующие
                теги:
              </h3>
              {show ? (
                <div>
                  <Label variant='Озеленение лесов и парков' />
                  <Label variant='Осознанное потребление и экологичный образ жизни' />
                </div>
              ) : (
                <Spin />
              )}
            </div>
            <div className={styles.buttonContainter}>
              <MyButton
                variant='primary'
                onClick={() => setNextStep(false)}
              >
                Назад
              </MyButton>
              <MyButton
                variant='primary'
                disabled={!fileUrl}
              >
                Создать
              </MyButton>
            </div>
          </div>
        )}
      </Form>
      {!!error !== false && (
        <div className={styles.articleDone}>
          <CheckCircleTwoTone twoToneColor='#10BC69' />
          <p>Статья создана</p>
        </div>
      )}
    </>
  )
}

export default ArticleForm
