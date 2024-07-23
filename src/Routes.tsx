import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UserSearch from './pages/UserSearch';
import RepoSearch from './pages/RepoSearch';
import Footer from './components/Footer';

function RoutesApp() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes >
                    <Route path="/" element={<Home />} />
                    <Route path="/search/users" element={<UserSearch />} />
                    <Route path="/search/repos" element={<RepoSearch />} />
                </Routes >
                <Footer />
            </div>
        </Router>
    );
}

export default RoutesApp;
