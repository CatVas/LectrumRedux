// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { book } from './book';

// Pages
import { Feed, Login, NewPassword, Profile, Signup } from '../pages';

const mapStateToProps = state => ({
    isAuthenticated: state.auth.get('isAuthenticated'),
});

@hot(module)
@withRouter
@connect(mapStateToProps)
export default class App extends Component {
    render () {
        const { isAuthenticated } = this.props;

        return isAuthenticated ? (
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
        ) : (
            <Switch>
                <Route
                    component = { Login }
                    path = { book.login }
                />
                <Route
                    component = { Signup }
                    path = { book.signup }
                />
                <Redirect to = { book.login } />
            </Switch>
        );
    }
}
