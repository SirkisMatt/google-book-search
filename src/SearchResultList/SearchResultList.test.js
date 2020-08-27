import React from 'react';
import ReactDOM from 'react-dom';
import SearchResultList from './SearchResultList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchResultList bookList={[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});