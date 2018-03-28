

import React from 'react';
import ReactDOM from 'react-dom';
import ChildCareFinderApp from './ChildCareFinderApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChildCareFinderApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
