
import { types } from './types';

export const authAction = {
    authenticate: () => ({ type: types.AUTHENTICATE }),
    loginAsync: (credentials) => ({
        payload: credentials,
        type: types.LOGIN,
    }),
    signupAsync: (userData) => ({
        payload: userData,
        type:    types.SIGNUP_ASYNC,
    }),
};
