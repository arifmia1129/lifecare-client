import './App.css';
import HeaderBanner from './pages/Header/HeaderBanner';
import Header from './pages/shared/Header';
import Navbar from './pages/shared/Navbar';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-2">
      <Header />
      <Navbar>
        <HeaderBanner />
      </Navbar>
    </div>
  );
}

export default App;
