
import { types } from './types';

export const profileActions = {
    clearProfile: () => ({ type: types.CLEAR_PROFILE }),

    fillProfile: (profile) => ({
        payload: profile,
        type:    types.FILL_PROFILE,
    }),
};
