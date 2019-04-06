
import { all, call, takeEvery } from 'redux-saga/effects';
import { types } from '../types';
import { createPost, fetchPosts } from './workers';

function* watchCreatePost () {
    yield takeEvery(types.CREATE_POST_ASYNC, createPost);
}

function* watchFetchPosts () {
    yield takeEvery(types.FETCH_POSTS_ASYNC, fetchPosts);
}

export function* watchPosts () {
    yield all([
        call(watchCreatePost),
        call(watchFetchPosts),
    ]);
}
