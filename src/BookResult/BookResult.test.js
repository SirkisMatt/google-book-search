import React from 'react';
import ReactDOM from 'react-dom';
import BookResult from './BookResult';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookResult />, div);
  ReactDOM.unmountComponentAtNode(div);
});