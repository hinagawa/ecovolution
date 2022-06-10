import React from 'react'

import { UploadOutlined } from '@ant-design/icons'
import { Upload } from 'antd'

import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'

import styles from './styles.module.css'

const fileList = [
  {
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-2',
    name: 'yyy.png',
    status: 'error',
  },
]
function ArticleForm() {
  return (
    <div className={styles.formContainer}>
      <div>
        <h3>Название места</h3>
        <Input placeholder='Название места' />
        <h3>Описание</h3>
        <Input placeholder='Описание места' />
        <h3>Адрес</h3>
        <h3>Загрузите фотографии</h3>
        <Upload
          action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
          listType='picture'
          defaultFileList={[...fileList]}
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </div>
      <Button variant='primary'>Создать</Button>
    </div>
  )
}

export default ArticleForm
