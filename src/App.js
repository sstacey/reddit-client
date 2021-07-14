import React, { useState, useEffect } from 'react';

import Articles from './features/article/Articles'

function App() {

  const [subreddit, setSubreddit] = useState('webdev')
  const [subFound, setSubFound] = useState(true)  

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" name="sub" id="sub" className="input" value={subreddit} onChange={e => setSubreddit(e.target.value)}/>
        <label htmlFor="sub" hidden={subFound}>No subs found!</label>
      </header>
      <Articles subreddit={subreddit} />
    </div>
  );
}

export default App;
