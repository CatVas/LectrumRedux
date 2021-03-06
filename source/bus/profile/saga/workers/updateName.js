
import { apply, put } from 'redux-saga/effects';
import { profileActions } from '../../actions';
import { uiActions } from '../../../ui/actions';
import { api } from '../../../../REST';

export function* updateName ({
    payload: { firstName, lastName },
}) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.profile.updateProfile, [{
            firstName, lastName,
        }]);
        const {
            data: updatedProfile, message,
        } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(profileActions.fillProfile(updatedProfile));
    } catch (error) {
        yield put(uiActions.emitError(error, 'updateName worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
