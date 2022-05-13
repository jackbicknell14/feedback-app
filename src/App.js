import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom';
import Card from './components/shared/Card';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/About';
import AboutIconLink from './components/AboutIconLink';
import Post from './components/Post';
import SimplePost from './components/SimplePost';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/*" element={<SimplePost />} />
            <Route path="/singlepost/:id/" element={<Post />} />
            <Route path="/singlepost/:id/:name" element={<Post />} />
          </Routes>
          <Card>
            <span> | </span>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : 'none')}
            >
              Home
            </NavLink>
            <span> | </span>
            <NavLink
              to="/post"
              className={({ isActive }) => (isActive ? 'active' : 'none')}
            >
              Post
            </NavLink>
            <span> | </span>

            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : 'none')}
            >
              About
            </NavLink>
            <span> | </span>
          </Card>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
