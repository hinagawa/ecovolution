import React, { useState } from 'react'
import { AddressSuggestions } from 'react-dadata'

import { UploadOutlined,
  CheckCircleTwoTone } from '@ant-design/icons'
import { Upload, Button } from 'antd'

import Input from '../../../components/Input/Input'
import Form from '../../../components/Form/Form'
import MyButton from '../../../components/Button/Button'

import { storage } from '../../../services/firebase'
import api from '../../../services/api/fetchWrapper'

import 'react-dadata/dist/react-dadata.css'
import styles from './styles.module.css'

function ArticleForm() {
  const [placeName, setPlaceName] = useState()
  const [placeDescription, setPlaceDescription] = useState()
  const [fileUrl, setFileUrl] = useState()
  const [error, setError] = useState()
  const [address, setAddress] = useState()

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
        placeLocation: address.value,
        firebasePath: fileUrl,
        placeTags: ['Vegan'],
      })
      .then((data) => (data.success ? setError(false) : setError(true)))
  }
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
          className={styles.textarea}
          placeholder='Описание места'
          onChange={(e) => setPlaceDescription(e.target.value)}
        />
        <h3>Адрес</h3>
        <AddressSuggestions token='' value={address} onChange={setAddress} />
        <h3>Загрузите фотографию</h3>
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
        <div className={styles.createButton}>
          <MyButton variant='primary' disabled={!(placeName && placeDescription && fileUrl)}>Создать</MyButton>
        </div>
      </Form>
      {!!error !== false && (
        <div className={styles.placeDone}>
          <CheckCircleTwoTone twoToneColor='#10BC69' />
          <p>Место создано</p>
        </div>
      )}
    </div>
  )
}

export default ArticleForm
