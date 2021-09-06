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

export let state = {
  componentsLoaded: [
    {About: false},
  ],
};

export const loadAbout = () => {
  this.state = this.state.About
  this.setState({
    componentsLoaded: !this.state.About
  })
};

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path="/">
              <Header />
              <Hero />
              <PortfolioContainer />
              {/* <About /> */}
            </Route>
            {/* <Route path="/about">
              <About />
            </Route> */}
            <Route path="/work">
              <PortfolioContainer />
            </Route>
            <Route path="/contact">
              <Footer />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
