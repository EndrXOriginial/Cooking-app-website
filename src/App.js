import logo from './logo.svg';
import './App.css';
import './styles/reset.css';
import './styles/normalize.css';
import { Navbar } from './Components/NavBar/navbar';
import { HomePage } from './Pages/Home/home';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
