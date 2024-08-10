import React from 'react';

import './App.scss';
import Header from '../Components/Header/Header';

import Home from '../Pages/Home/Home';
import Footer from '../Components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Header />
        <Home />

        <Footer />
      </div>
    </div>
  );
}

export default App;
