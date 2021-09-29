import { Switch, Route } from 'react-router-dom'
import Login from './pages/Login/Login';
import Home from './pages/Home';

const Router = () => {
    return ( 
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/inforeddit/:filter?" component={Home} />
            <Route path="/inforeddit" component={Home} />
        </Switch>
    );
}
 
export default Router;