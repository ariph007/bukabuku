import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Daftar from './pages/Daftar';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/daftar' element={<Daftar/>} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
