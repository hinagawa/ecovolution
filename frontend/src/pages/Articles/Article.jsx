import { React, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import api from '../../services/api/fetchWrapper'

function Article() {
  const [article, setArticle] = useState()
  const location = useLocation()

  useEffect(async () => {
    const id = location.pathname.split('/')[2]
    await api
      .get(`api/article/getArticleById?articleId=${id}`)
      .then((data) => setArticle(data.message))
  })
  return (
    <div>
      <h1>{article?.articleName}</h1>
      <h1>{article?.articleText}</h1>
    </div>
  )
}

export default Article
