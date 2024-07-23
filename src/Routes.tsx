import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function RoutesApp() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes >
                    <Route path="/" element={<Home />} />
                    <Route path="/search/users" />
                    <Route path="/search/repos" />
                </Routes >
            </div>
        </Router>
    );
}

export default RoutesApp;
