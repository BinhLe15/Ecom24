import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';
import './App.css';
import Home from './features/Home/Home.js';
import News from './features/News/News.js';
import SignIn from './features/SignIn/SignIn.js';
import Matches from './features/Matches/Matches.js';
import TeamsPage from './features/Team/TeamPage.js'
import TeamDetailPage from './features/TeamDetail/TeamDetailPage.js'
import NewsDetail from './features/News/NewsDetails.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer.js';
import GroupsPage from './features/Groups/GroupsPage.js';
import AddNews from './features/News/AddNews.js';
import SignUp from './features/SignUp/SignUp.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/news" exact element={<News />}></Route>
          <Route path="/addnews" exact element={<AddNews />}></Route>
          <Route path="/newsdetail/:newsid" exact element={<NewsDetail />}></Route>
          <Route path="/sign-in" exact element={<SignIn />}></Route>
          <Route path="/sign-up" exact element={<SignUp/>}></Route>
          <Route path="/fixtures" exact element={<Matches />}></Route>
          <Route path="/teams" exact element={<TeamsPage/>}></Route>
          <Route path='/teamdetail/:team_key' exact element={<TeamDetailPage/>}></Route>
          <Route path='/info' exact element={''}></Route> 
          <Route path='/groups' exact element={<GroupsPage />}></Route> 
        </Routes>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
