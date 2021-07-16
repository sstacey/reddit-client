import React from 'react'

function Article( { article }) {
    return (
        <article>
            <a href={`https://www.reddit.com/${article.permalink}`} target="_blank">
                <h3>{article.title}</h3>
            </a>
            <h4>Posted by: {article.author_fullname}</h4>
            <ul>
                <li><i class="fas fa-arrow-up"></i> {article.ups}</li>
                <li><i class="fas fa-arrow-down"></i> {article.downs}</li>
                <li><i class="fas fa-comments"></i> {article.num_comments}</li>
            </ul>
        </article>
    )
}

export default Article
