import React, { useState, useEffect } from 'react';
import Article from '../src/features/article/Article'

import Reddit from './utils/Reddit'

function App() {

  const [articles, setArticles] = useState([])
  const [subreddit, setSubreddit] = useState('webdev')
  const [subFound, setSubFound] = useState(true)

  useEffect(() => {
    Reddit.getSubreddits(subreddit).then(resp => {
      setArticles(resp)
    })
  }, [subreddit])

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" name="sub" id="sub" className="input" value={subreddit} onChange={e => setSubreddit(e.target.value)}/>
        <label htmlFor="sub" hidden={subFound}>No subs found!</label>
      </header>
      <div className="articles">
        {
          (articles) ? articles.map(article => <Article key={article.data.id} article={article.data} />) : ''
        }
      </div>
    </div>
  );
}

export default App;
