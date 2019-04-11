
import { types } from './types';

export const authAction = {
    authenticate: () => ({ type: types.AUTHENTICATE }),
    signupAsync: (userData) => ({
        payload: userData,
        type:    types.SIGNUP_ASYNC,
    }),
};
