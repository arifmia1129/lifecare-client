import './App.css';
import Home from './pages/Home/Home';
import Header from './pages/shared/Header';
import Navbar from './pages/shared/Navbar';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-2">
      <Header />
      <Navbar>
        <Home />
      </Navbar>
    </div>
  );
}

export default App;
