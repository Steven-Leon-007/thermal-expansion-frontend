import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/homePage/Home'
import Simulator from './components/simulatorPage/Simulator';
import './App.scss';
import useLocalStorage from 'use-local-storage';

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home isDark={isDark} setIsDark={setIsDark} />} />
        <Route path='/simulator' element={<Simulator isDark={isDark} setIsDark={setIsDark}/>} />
      </Routes>
    </Router>
  );
}

export default App;
