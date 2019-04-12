
import { all, call, takeEvery } from 'redux-saga/effects';
import { types } from '../types';
import { login, signup } from './workers';

function* watchSignup () {
    yield takeEvery(types.LOGIN, login);
    yield takeEvery(types.SIGNUP_ASYNC, signup);
}

export function* watchAuth () {
    yield all([
        call(watchSignup),
    ]);
}
