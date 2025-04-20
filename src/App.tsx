import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home.tsx';
//import AboutSection from './pages/Home/AboutSection/AboutSection.tsx';
//import Contact from './pages/Home/Contact/Contact.tsx';

import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
