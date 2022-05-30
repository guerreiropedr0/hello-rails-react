import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={'Hello World'} />
        <Route path='/greetings' element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
