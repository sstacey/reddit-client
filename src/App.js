import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { fetchArticlesBySub } from '../src/features/article/articleSlice'
import Article from '../src/features/article/Article'

function App() {

  const [subreddit, setSubreddit] = useState('webdev')
  const [subFound, setSubFound] = useState(true)  
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchArticlesBySub(subreddit))
  }, [subreddit])

  const articles = useSelector((state) => state.article.articles)



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
