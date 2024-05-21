import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home.js';
import Services from './components/Pages/Services.js';
import Products from './components/Pages/Products.js';
import SignIn from './components/Pages/SignIn.js';
import Matches from './components/Matches.js';
import Match from './components/Match.js';

import Navbar from './components/Navbar';
import Footer from './components/Footer.js';
import GroupsPage from './components/Pages/GroupsPage.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/services" exact element={<Services />}></Route>
          <Route path="/sign-in" exact element={<SignIn />}></Route>
          <Route path="/fixtures" exact element={<Matches />}></Route>
          <Route path='/info' exact element={''}></Route> 
          <Route path='/groups' exact element={<GroupsPage />}></Route> 
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
