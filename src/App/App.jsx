import './App.scss';
import Header from '../Components/Header/Header';
import Home from '../Pages/Home/Home';
import Footer from '../Components/Footer/Footer';
import Cookies from '../Components/Cookies/Cookies';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import NoPage from '../Pages/NoPage/NoPage';
import Privacy from '../Pages/Pivacy/Privacy';
import Terms from '../Pages/Terms/Terms';
import CookieSettings from '../Pages/CookieSettings/CookieSettings';
import serviceDb from '../data/services.json';
import Service from '../Pages/Service/Service';

function App() {
  const [bodyScroll, setBodyScroll] = useState(true);

  const [page, setPage] = useState(() => {
    const currentPagePart = localStorage.getItem('currentPagePart');
    return currentPagePart !== null
      ? JSON.parse(currentPagePart)
      : serviceDb.blockchain;
  });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    document.querySelector('body').style.overflow = bodyScroll
      ? 'visible'
      : 'hidden';
  }, [bodyScroll]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView();
      }
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <div className="app__container">
          <Header bodyScroll={bodyScroll} setBodyScroll={setBodyScroll} />

          <Routes>
            <Route
              path="/"
              element={
                <Home
                  page={page}
                  setPage={setPage}
                  serviceDb={serviceDb}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              }
            ></Route>
            <Route path="/noPage" element={<NoPage />}></Route>
            <Route path="/privacy" element={<Privacy />}></Route>
            <Route path="/terms" element={<Terms />}></Route>
            <Route path="/cookie-settings" element={<CookieSettings />}></Route>
            <Route
              path="/service"
              element={
                <Service
                  page={page}
                  setPage={setPage}
                  serviceDb={serviceDb}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              }
            ></Route>
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>

          <Footer />

          <Cookies />
        </div>
      </div>
    </Router>
  );
}

export default App;
