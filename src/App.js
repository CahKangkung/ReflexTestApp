import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Guide from './pages/Guide';
import Main from './pages/Main';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/guide" element={<Guide />}/>
          <Route path="/main" element={<Main />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
