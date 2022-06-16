/* eslint-disable no-underscore-dangle */
import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert'

import { HeartTwoTone,
  DeleteOutlined,
  FileImageTwoTone,
  HeartOutlined } from '@ant-design/icons'

import { addLikedArticles } from '../../../store/slices/userSlice'

import api from '../../../services/api/fetchWrapper'

import Link from '../../../components/Link/Link'
import Button from '../../../components/Button/Button'
import TagsList from '../../../components/TagsList/TagsList'

import styles from './styles.module.css'

function ShortArticle({ article }) {
  const currentUser = useSelector(
    (state) => state.user.user._id,
  )
  const currentRole = useSelector(
    (state) => state.user.user.role,
  )
  const likedArticles = useSelector(
    (state) => state.user.user.likedArticles,
  )
  const dispatch = useDispatch()

  const handleLike = async (articleId) => {
    await api.get(
      `api/user/addLikedArticle?articleId=${articleId}&userId=${currentUser}`,
    )
    dispatch(addLikedArticles(articleId))
  }
  const handleDelete = async () => {
    swal({
      title: 'Вы уверены?',
      text: 'Статью нельзя будет восставновить',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        api
          .delete(
            `api/article/deleteArticleById?articleId=${article._id}`,
          )
          .then((data) => console.log(data.message))
        swal('Статья была удалена', {
          icon: 'success',
        })
      } else {
        swal('Удаление отменено')
      }
    })
  }
  return (
    <div className={styles.article}>
      <div className={styles.mainContent}>
        {article.firebasePath === '' ? (
          <div className={styles.noImageContainer}>
            <FileImageTwoTone twoToneColor='#00BB61' />
          </div>
        ) : (
          <img
            src={article.firebasePath}
            alt='article_preview'
            className={styles.articleImg}
          />
        )}
        <div className={styles.articleText}>
          <div className={styles.textGroup}>
            <div className={styles.articleHeader}>
              <Link href={`articles/${article._id}`}>
                {article.articleName}
              </Link>
              <div>
                <Button
                  variant='link'
                  onClick={() => handleLike(article._id)}
                >
                  {likedArticles?.includes(article._id) ? (
                    <HeartTwoTone twoToneColor='#a13f3f' />
                  ) : (
                    <HeartOutlined />
                  )}
                </Button>
                {(currentUser === article?.articleAuthorId || currentRole === 'Admin') && (
                  <Button
                    variant='link'
                    onClick={handleDelete}
                  >
                    <DeleteOutlined />
                  </Button>
                )}
              </div>
            </div>
            <p>{article.text}</p>
          </div>
          <TagsList tagsArray={article.tagsArray} />
        </div>
      </div>
    </div>
  )
}

ShortArticle.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  article: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default ShortArticle
