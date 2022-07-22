import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';
import Home from './pages/Home/Home';
import Header from './pages/shared/Header';
import Navbar from './pages/shared/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import About from './pages/About';
import Blog from './pages/Blog';
import Appointment from './pages/Appointment/Appointment';
import Doctors from './pages/Doctors/Doctors';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-2">
      <Header />
      <Navbar>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/doctors' element={<Doctors />} />
        </Routes>
      </Navbar>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
