
import { applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMV from 'redux-saga';
import { customThunk } from './custom';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const logger = createLogger({
    collapsed: true,
    colors:    {
        action:    () => '#149945',
        error:     () => '#ff0005',
        nextState: () => '#a47104',
        prevState: () => '#1c5faf',
        title:     () => '#139BFE',
    },
    duration: true,
});
const sagaMV = createSagaMV();
const middleware = [
    sagaMV,
    customThunk,
];

if (__DEV__) {
    middleware.push(logger);
}

const composeEnhancers = __DEV__ && devtools ? devtools : compose;

const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export { enhancedStore, sagaMV };
