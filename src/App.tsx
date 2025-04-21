import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home.tsx';
//import AboutSection from './pages/Home/AboutSection/AboutSection.tsx';
//import Contact from './pages/Home/Contact/Contact.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;
