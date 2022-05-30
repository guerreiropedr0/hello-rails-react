import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
import store from '../redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={'Hello World'} />
          <Route path='/greetings' element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
