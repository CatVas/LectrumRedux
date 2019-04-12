
import { apply, put } from 'redux-saga/effects';
import { authAction } from '../../../auth/actions';
import { profileActions } from '../../../profile/actions';
import { uiActions } from '../../../ui/actions';
import { api } from '../../../../REST';

export function* login ({ payload: credentials }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.auth.login, [credentials]);
        const { data: profile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(profileActions.fillProfile(profile));
        yield put(authAction.authenticate());
    } catch (error) {
        yield put(uiActions.emitError(error, 'signup worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
