import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchArticlesBySub } from '../article/articleSlice'

import Article from './Article'

function Articles({subreddit }) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchArticlesBySub(subreddit))
    }, [subreddit])

    const articles = useSelector((state) => state.article.articles)

    return (
        <div className="articles">
            {
                (articles) ? articles.map(article => <Article key={article.data.id} article={article.data} />) : ''
            }
        </div>
    )
}

export default Articles