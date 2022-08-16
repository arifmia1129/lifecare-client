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
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppointment from './pages/Dashboard/MyAppointment';
import WelcomeDashboard from './pages/Dashboard/WelcomeDashboard';
import PrivateRoute from "./pages/Authentication/PrivateRoute";
import RequireAdmin from "./pages/Authentication/RequireAdmin";
import UserProfile from './pages/Dashboard/UserProfile';
import Payment from './pages/Dashboard/Payment';
import AddReview from './pages/Dashboard/AddReview';
import Users from './pages/Dashboard/Users';
import AllServices from "./pages/AllServices";
import Courses from "./pages/Courses/Courses";
import Appointments from './pages/Dashboard/Appointments';

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
          <Route path='/all-services' element={<AllServices />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/appointment' element={<PrivateRoute>
            <Appointment />
          </PrivateRoute>} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/dashboard' element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>}>
            <Route index element={<WelcomeDashboard />} />
            <Route path='/dashboard/my-appointment' element={<MyAppointment />} />
            <Route path='/dashboard/profile' element={<UserProfile />} />
            <Route path='/dashboard/payment/:id' element={<Payment />} />
            <Route path='/dashboard/add-review' element={<AddReview />} />
            <Route path='/dashboard/appointments' element={<RequireAdmin><Appointments /></RequireAdmin>} />
            <Route path='/dashboard/users' element={<RequireAdmin><Users /></RequireAdmin>} />
          </Route>
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
