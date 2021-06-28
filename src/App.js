import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Hero />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}

export default App;
