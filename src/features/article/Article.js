import React from 'react'

function Article( { article }) {
    return (
        <article>
            <a href={`https://www.reddit.com/${article.permalink}`} target="_blank">
                <h3>{article.title}</h3>
            </a>
            <h4>Posted by: {article.author_fullname}</h4>
            <ul>
                <li>Ups:{article.ups}</li>
                <li>Downs:{article.downs}</li>
                <li>Comments:{article.num_comments}</li>

            </ul>
        </article>
    )
}

export default Article
