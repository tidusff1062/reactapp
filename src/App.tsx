import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Jeu from './components/Jeu';
import Gestion from './components/Gestion';

function AppRouter() {
    return (
        <Router>
            <div id='app'>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Equipe</Link>
                        </li>
                        <li>
                            <Link
                                to={{
                                    pathname: '/jeu',
                                    state: { partie: 'Partie' }
                                }}
                            >
                                Combat
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='/' exact component={Gestion} />
                    <Route path='/jeu' component={Jeu} />
                    <Route render={() => <h1>404 Error</h1>} />
                </Switch>
            </div>
        </Router>
    );
}

export default AppRouter;
