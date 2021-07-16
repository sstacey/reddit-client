import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchArticlesBySub } from '../article/articleSlice'

import Article from './Article'

function Articles() {

    const dispatch = useDispatch()
    const [subreddit, setSubreddit] = useState('webdev')
    const articles = useSelector((state) => state.article.articles)
    const searchTerm = useSelector((state) => state.article.searchTerm)
    const subreddits = useSelector((state) => state.article.subreddits)

    useEffect(() => {
        dispatch(fetchArticlesBySub(subreddit))

    }, [searchTerm, subreddit])

    const handleSubredditChange = (e) => {
        setSubreddit(e.target.innerHTML)
        const currSelected = document.querySelector('.selected')
        if (currSelected) {
            currSelected.removeAttribute("class")
        }
        e.target.className = 'selected'
    }

    const subredditLinks = subreddits.map(sub => (<li key={sub}><button onClick={handleSubredditChange} id={sub}>{sub}</button></li>))


    return (
        <div class="main-container">
            <aside>
                <ul className="subreddit-list">
                    {subredditLinks}
                </ul>
            </aside>
            <div className="articles">
                {
                    (articles) ? articles.map(article => <Article key={article.data.id} article={article.data} />) : ''
                }
            </div>
        </div>
    )
}

export default Articles