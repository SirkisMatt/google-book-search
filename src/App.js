import React from 'react';
import './App.css';
import SearchAndFilter from './SearchAndFilter/SearchAndFilter';
import SearchResultList from './SearchResultList/SearchResultList'

const bookList = [
{
title: "Wild Mind",
author: "Bill Plotkin",
listPrice: 31.57,
textSnippet: "Wild Mind identifies these resources — which Bill Plotkin calls the four facets of the Self, or the four dimensions of our innate human wholeness — and also the four sets of fragmented or wounded subpersonalities that form during ...",
cover: "http://books.google.com/books/content?id=OczmHOQi5zsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
},
{
  title: "Soul Craft",
  author: "Bill Plotkin",
  listPrice: 31.57,
  textSnippet: "Since 1980, depth psychologist Bill Plotkin has been guiding women and men into the wilderness — the redrock canyons and snow-crested mountains of the American West — but also into the wilds of the soul. He calls this work soulcraft.",
  cover: "http://books.google.com/books/content?id=Kuy725kczicC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
}
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Book Search</h1>
        <SearchAndFilter />
        <SearchResultList 
        bookList={bookList}
        />
      </header>
    </div>
  );
}

export default App;
