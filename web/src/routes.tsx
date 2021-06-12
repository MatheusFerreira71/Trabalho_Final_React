import { Route, BrowserRouter } from 'react-router-dom';
import FlowerShow from './pages/FlowerShow';
import Home from './pages/home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={FlowerShow} path="/flower/:id" />
        </BrowserRouter>
    );
}

export default Routes;