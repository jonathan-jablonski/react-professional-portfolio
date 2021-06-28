import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PortfolioContainer } from './components/PortfolioContainer';
import { Footer } from './components/Footer';

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
      <div>
        <PortfolioContainer />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
