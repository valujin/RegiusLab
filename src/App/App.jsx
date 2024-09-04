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
// import Service from '../Pages/Service/Service';
import Blockchain from '../Pages/Blockchain/Blockchain';
import Automatization from '../Pages/Automatization/Automatization';
import TelegramBots from '../Pages/TelegramBots/TelegramBots';
import CDev from '../Pages/OneCDev/OneCDev';
import OneCDev from '../Pages/OneCDev/OneCDev';
import Magento from '../Pages/Magento/Magento';
import Bitrix24 from '../Pages/Bitrix24/Bitrix24';
function App() {
  const [bodyScroll, setBodyScroll] = useState(true);

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
            <Route path="/" element={<Home serviceDb={serviceDb} />}></Route>
            <Route path="/privacy" element={<Privacy />}></Route>
            <Route path="/terms" element={<Terms />}></Route>
            <Route path="/cookie-settings" element={<CookieSettings />}></Route>

            <Route path="/blockchain&web3" element={<Blockchain />}></Route>
            <Route path="/automatization" element={<Automatization />}></Route>
            <Route path="/telegram-bots" element={<TelegramBots />}></Route>
            <Route path="/1c-development" element={<OneCDev />}></Route>
            <Route path="/magento" element={<Magento />}></Route>
            <Route path="/bitrix24" element={<Bitrix24 />}></Route>
            <Route path="/noPage" element={<NoPage />}></Route>
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
