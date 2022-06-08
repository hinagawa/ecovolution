/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { PlusOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

import { addArticle } from '../../store/slices/articleSlice'
// import { addLikedArticles } from '../../store/slices/userSlice'

import Button from '../../components/Button/Button'
import Modal from '../../layouts/Modal/Modal'
import ArticleForm from '../../layouts/ArticleLayouts/ArticleForm/ArticleForm'
import ArticlesList from '../../layouts/ArticleLayouts/ArticlesList/ArticlesList'
import SearchBar from '../../layouts/SearchBar/SearchBar'
import Header from '../../layouts/Header/Header'

import api from '../../services/api/fetchWrapper'

import styles from './styles.module.css'

function Articles() {
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState()

  // const currentUser = useSelector(
  //   (state) => state.user.user._id,
  // )

  useEffect(async () => {
    setLoading(true)
    await api
      .get('api/article/getArticles')
      .then((data) => dispatch(addArticle(data))).then(setLoading(false))
    // await api
    //   .get(`api/user/getLikedArticle?userId=${currentUser}`)
    //   .then((data) => {
    //     dispatch(addLikedArticles(data[0]?.likedArticles))
    //   })
    //   .then(setLoading(false))
  })
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.articlesContainer}>
        <SearchBar />
        {loading ? <Spin /> : <ArticlesList />}
      </div>
      <div className={styles.buttonContainer}>
        <Button
          variant='primary'
          shape='circle'
          onClick={() => setIsOpen(true)}
          data-tip='Создать статью'
        >
          <PlusOutlined />
        </Button>
      </div>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <ArticleForm />
        </Modal>
      )}
    </div>
  )
}

export default Articles
