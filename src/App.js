import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/homePage/Home'
import Simulator from './components/simulatorPage/Simulator';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/simulator' element={<Simulator />} />
      </Routes>
    </Router>
  );
}

export default App;
