import { Route, BrowserRouter } from 'react-router-dom';
import About from './pages/About';
import FlowerShow from './pages/FlowerShow';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import FlowerForm from './pages/FlowerForm';

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Route component={Home} path="/" exact />
            <Route component={FlowerShow} path="/flower/:id" />
            <Route component={About} path="/about" />
            <Route component={FlowerForm} path="/create" />
            <Route component={FlowerForm} path="/edit/:id" />
        </BrowserRouter>
    );
}

export default Routes;