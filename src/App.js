import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import Home from './pages/Home/Home';
import Header from './pages/shared/Header';
import Navbar from './pages/shared/Navbar';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-2">
      <Header />
      <Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
