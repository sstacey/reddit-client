import React, { useState, useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import Article from '../src/features/article/Article'

import Reddit from './utils/Reddit'

function App() {

  const [articles, setArticles] = useState([])
  const [subreddit, setSubreddit] = useState('webdev')
  const [subFound, setSubFound] = useState(true)

  useEffect(() => {
    Reddit.getSubreddits(subreddit).then(resp => {
      if (resp) {
        setArticles(resp)
      } else {
        console.log('No subs found')
      }
    })
    // fetch(`https://www.reddit.com/r/${subreddit}.json?limit=50`).then(res => {
    //   if (res.status !== 200) {
    //     setSubFound(false)
    //     return console.log('No subreddit found')
    //   }
    //   res.json().then(data => {
    //     if (data !== null) {
    //       setSubFound(true)
    //       setArticles(data.data.children)
    //     } 
    //   })
    // })
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
