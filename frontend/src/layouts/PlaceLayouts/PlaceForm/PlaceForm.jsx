import React, { useState } from 'react'

import { UploadOutlined, CheckCircleTwoTone } from '@ant-design/icons'
import { Upload, Button } from 'antd'

import Input from '../../../components/Input/Input'
import Form from '../../../components/Form/Form'
import MyButton from '../../../components/Button/Button'

import { storage } from '../../../services/firebase'
import api from '../../../services/api/fetchWrapper'

import styles from './styles.module.css'

function ArticleForm() {
  const [placeName, setPlaceName] = useState()
  const [placeDescription, setPlaceDescription] = useState()
  const [fileUrl, setFileUrl] = useState()
  const [error, setError] = useState()

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
    await api
      .post('api/place/create', {
        placeName,
        placeDescription,
        placeLocation: ['14', '23'],
        firebasePath: fileUrl,
        placeTags: ['Vegan'],
      })
      .then((data) => (data.success ? setError(false) : setError(true)))
  }
  console.log(placeName, placeDescription)
  return (
    <div className={styles.formContainer}>
      <Form onSubmit={handleSubmit}>
        <h3>Название места</h3>
        <Input
          placeholder='Название места'
          onChange={(e) => setPlaceName(e.target.value)}
        />
        <h3>Описание</h3>
        <textarea
          placeholder='Описание места'
          onChange={(e) => setPlaceDescription(e.target.value)}
        />
        <h3>Адрес</h3>
        <h3>Загрузите фотографии</h3>
        <Upload
          defaultFileList={[]}
          beforeUpload={() => false}
          listType='picture'
          onChange={(e) => handleChange(e)}
        >
          <Button icon={<UploadOutlined />}>
            Загрузить
          </Button>
        </Upload>
        <MyButton variant='primary'>Создать</MyButton>
      </Form>
      {!!error !== false && (
        <>
          <CheckCircleTwoTone />
          <p>Место создано</p>
        </>
      )}
    </div>
  )
}

export default ArticleForm
