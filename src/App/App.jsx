import './App.scss';
import Header from '../Components/Header/Header';

import Home from '../Pages/Home/Home';
import Footer from '../Components/Footer/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [bodyScroll, setBodyScroll] = useState(true);

  useEffect(() => {
    document.querySelector('body').style.overflow = bodyScroll
      ? 'visible'
      : 'hidden';
  }, [bodyScroll]);

  return (
    <div className="app">
      <div className="app__container">
        {/* <Header bodyScroll={bodyScroll} setBodyScroll={setBodyScroll} /> */}
        <Home />

        <Footer />
      </div>
    </div>
  );
}

export default App;
