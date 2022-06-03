/* eslint-disable no-underscore-dangle */
import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { HeartOutlined,
  DeleteOutlined,
  FileImageTwoTone } from '@ant-design/icons'

import { addLikedArticle } from '../../../store/slices/articleSlice'

import Link from '../../../components/Link/Link'
import Button from '../../../components/Button/Button'
import TagsList from '../../../components/TagsList/TagsList'

import styles from './styles.module.css'

function ShortArticle({ article }) {
  const currentUser = useSelector(
    (state) => state.user.user._id,
  )
  const dispatch = useDispatch()
  const handleLike = (articleId) => {
    dispatch(addLikedArticle(articleId))
  }
  const handleDelete = () => {}
  return (
    <div className={styles.article} key={article._id}>
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
              <Button variant='link' onClick={handleLike}>
                <HeartOutlined />
              </Button>
              {currentUser === article?.articleAuthorId && (
                <Button
                  variant='link'
                  onClick={handleDelete}
                >
                  <DeleteOutlined />
                </Button>
              )}
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
  article: PropTypes.shape({
    _id: PropTypes.string,
    articleName: PropTypes.string,
    text: PropTypes.string,
    firebasePath: PropTypes.string,
    articleAuthorId: String,
    tagsArray: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
}

export default ShortArticle
