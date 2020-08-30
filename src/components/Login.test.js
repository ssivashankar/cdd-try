import React from 'react';
import ReactDom from 'react-dom';
import Login from './Login';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDom.render(<Login />, div);
  ReactDom.unmountComponentAtNode(div);
});
