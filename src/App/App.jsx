import './App.scss';
import Header from '../Components/Header/Header';
import Home from '../Pages/Home/Home';
import Footer from '../Components/Footer/Footer';
import Cookies from '../Components/Cookies/Cookies';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NoPage from '../Pages/NoPage/NoPage';

function App() {
  const [bodyScroll, setBodyScroll] = useState(true);
  // const [cookieVisible, setCookieVisible] = useState(false);

  useEffect(() => {
    document.querySelector('body').style.overflow = bodyScroll
      ? 'visible'
      : 'hidden';
  }, [bodyScroll]);

  return (
    <Router>
      <div className="app">
        <div className="app__container">
          <Header bodyScroll={bodyScroll} setBodyScroll={setBodyScroll} />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/noPage" element={<NoPage />}></Route>
          </Routes>

          <Footer />

          <Cookies
          // cookieVisible={cookieVisible}
          // setCookieVisible={setCookieVisible}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
