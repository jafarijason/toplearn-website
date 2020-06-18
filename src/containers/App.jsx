import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Web from './Web';

const App = () => {
  return (
    <BrowserRouter>
      <Web />
    </BrowserRouter>
  );
}

export default App;