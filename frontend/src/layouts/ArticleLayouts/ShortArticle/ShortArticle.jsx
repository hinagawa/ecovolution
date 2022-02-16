import React, { useState } from 'react'
import PropTypes from 'prop-types'

import blackHeart from '../../../assets/images/heartBlack.svg'
import pinkHeart from '../../../assets/images/heartPink.svg'

import Link from '../../../components/Link/Link'
import Button from '../../../components/Button/Button'
import TagsList from '../../../components/TagsList/TagsList'

import styles from './styles.module.css'

function ShortArticle({
  headerText,
  text,
  src,
  tagsArray,
}) {
  const [like, setLike] = useState(false)
  const handleClick = () => setLike(!like)
  return (
    <div className={styles.article}>
      <div className={styles.likeButton}>
        <Button onClick={handleClick} variant='link'>
          {!like && <img src={blackHeart} alt='Like' />}
          {like && <img src={pinkHeart} alt='Like' />}
        </Button>
      </div>
      <div className={styles.mainContent}>
        <img
          src={src}
          alt='article_preview'
          className={styles.articleImg}
        />
        <div className={styles.articleText}>
          <Link href='/'>{headerText}</Link>
          <p>{text}</p>
        </div>
      </div>
      <TagsList tagsArray={tagsArray} />
    </div>
  )
}

ShortArticle.propTypes = {
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  tagsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ShortArticle
