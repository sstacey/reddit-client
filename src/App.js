import React, { useState, useEffect } from 'react';

import { updateSearchTerm } from '../src/features/article/articleSlice'
import { useDispatch, useSelector } from 'react-redux'

import Articles from './features/article/Articles'

function App() {

  const searchTerm = useSelector((state) => state.article.searchTerm)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" name="search" id="search" className="input" value={searchTerm} onChange={e => dispatch(updateSearchTerm(e.target.value))}/>
      </header>
      <Articles />
    </div>
  );
}

export default App;
