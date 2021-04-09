import {BrowserRouter as Router, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import Home from './components/home'
import Favorites from './components/favorites'

function App() {
    return (
        <div className="App">
            <Router>
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                    className="switch-wrapper" 
                >
                    <Route exact path='/' component={Home} />
                    <Route path='/favorites' component={Favorites} />
                </AnimatedSwitch>
            </Router>
        </div>
    );
}

export default App;
