import './App.css';
import HeaderBanner from './pages/Header/HeaderBanner';
import Home from './pages/Home/Home';
import Header from './pages/shared/Header';
import Navbar from './pages/shared/Navbar';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-2">
      <Header />
      <Navbar>
        <HeaderBanner />
        <Home />
      </Navbar>
    </div>
  );
}

export default App;
