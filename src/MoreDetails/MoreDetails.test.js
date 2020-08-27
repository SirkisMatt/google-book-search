import React from 'react';
import ReactDOM from 'react-dom';
import MoreDetails from './MoreDetails';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MoreDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});