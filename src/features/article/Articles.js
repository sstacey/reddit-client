import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchArticlesBySub } from '../article/articleSlice'

import Article from './Article'

function Articles() {

    const dispatch = useDispatch()
    const articles = useSelector((state) => state.article.articles)
    const search = ''

    useEffect(() => {
        dispatch(fetchArticlesBySub())
    }, [])


    return (
        <div className="articles">
            {
                (articles) ? articles.map(article => <Article key={article.data.id} article={article.data} />) : ''
            }
        </div>
    )
}

export default Articles