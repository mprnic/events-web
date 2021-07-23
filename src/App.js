import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Event, Homepage } from './pages';
import { AuthService } from './services';

import './index.scss';

export const App = () => {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        if (localStorage.getItem('authToken')) {
            AuthService.getUser()
                .then(response => setUser(response.data))
                .catch();
        }
    });

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Homepage user={user} />
                </Route>
                <Route path="/event">
                    <Event user={user} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
