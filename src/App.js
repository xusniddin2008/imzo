
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import NaviBar from './components/Navbar';
import Footer from './components/Footer';
import Phone from './components/Phone';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import  Home  from './Home';
import { About } from './About';
import { Services } from './Services';
import { Products } from './Products';
import { Contacts } from './Contacts';


function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </Router>
      <Phone />
      <Footer />
    </>
  );
}

export default App;
