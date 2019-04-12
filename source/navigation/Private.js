// Core
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { book } from './book';

// Pages
import { Feed, NewPassword, Profile } from '../pages';

export default class Private extends Component {
    render () {
        return (
            <Switch>
                <Route
                    component = { Feed }
                    path = { book.feed }
                />
                <Route
                    component = { NewPassword }
                    path = { book.newPassword }
                />
                <Route
                    component = { Profile }
                    path = { book.profile }
                />
                <Redirect to = { book.feed } />
            </Switch>
        );
    }
}
