/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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

  const currentUser = useSelector(
    (state) => state.user.user._id,
  )

  const fetchArticles = async (search = null) => {
    try {
      setLoading(true)
      const data = await api.get(`api/article/getArticles${search ? `/${search}` : ''}`)
      dispatch(addArticle(data))
      const likedArticles = await api.get(`api/user/getLikedArticle?userId=${currentUser}`)
      console.log(likedArticles)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  const handleSearch = (search) => {
    fetchArticles(search)
  }

  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.articlesContainer}>
        <SearchBar showSubscriptionFilter onSearch={handleSearch} />
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
