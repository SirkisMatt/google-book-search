import React from 'react';
import ReactDOM from 'react-dom';
import SearchAndFilter from './SearchAndFilter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchAndFilter />, div);
  ReactDOM.unmountComponentAtNode(div);
});