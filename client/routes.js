import React from 'react';
import {Route} from 'react-router-dom';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import NewEventPage from './components/events/NewEventPage';
import Search from './components/search/App';
import Rent from './components/rental/RentCarPage';
import Reviews from './components/videos/App'

import requireAuth from './utils/requireAuth';
import {IndexRoute} from "react-router";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Greetings}/>
        <Route path="signup" component={SignupPage}/>
        <Route path="login" component={LoginPage}/>
        <Route path="browse" component={Search}/>
        <Route path="rent/:id" component={Rent}/>
        <Route path="new-event" component={requireAuth(NewEventPage)}/>
        <Route path="reviews" component={Reviews}/>
    </Route>
)
