import React from 'react';
import propTypes from 'prop-types';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={'Hello World'} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
