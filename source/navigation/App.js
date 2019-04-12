// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Private from './Private';
import Public from './Public';
import { authAction } from '../bus/auth/actions';
import { Loading } from '../components';

const mapDispatchToProps = {
    initializeAsync: authAction.initializeAsync,
};
const mapStateToProps = state => ({
    isAuthenticated: state.auth.get('isAuthenticated'),
    isInitialized: state.auth.get('isInitialized'),
});

@hot(module)
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
    componentDidMount () {
        this.props.initializeAsync();
    }

    render () {
        const { isAuthenticated, isInitialized } = this.props;

        if (!isInitialized) {
            return <Loading />;
        }

        return isAuthenticated ? <Private /> : <Public />;
    }
}
