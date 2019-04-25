
import { all, call, takeEvery } from 'redux-saga/effects';
import { types } from '../types';
import { updateAvatar, updateName } from './workers';

function* watchUpdateAvatar () {
    yield takeEvery(types.UPDATE_AVATAR_ASYNC, updateAvatar);
}

function* watchUpdateName () {
    yield takeEvery(types.UPDATE_NAME_ASYNC, updateName);
}

export function* watchProfile () {
    yield all([
        call(watchUpdateAvatar),
        call(watchUpdateName),
    ]);
}
