import React, { useState, useEffect } from 'react';

import { updateSearchTerm } from '../src/features/article/articleSlice'
import { useDispatch, useSelector } from 'react-redux'

import Articles from './features/article/Articles'

function App() {

  const searchTerm = useSelector((state) => state.article.searchTerm)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="app-header">
        <nav>
          <h3 className="logo">RedditClient</h3>
          <input type="text" name="search" id="search" className="input" placeholder="Search" value={searchTerm} onChange={e => dispatch(updateSearchTerm(e.target.value))}/>
        </nav>
      </header>
      <Articles />
    </div>
  );
}

export default App;
