
import { types } from './types';

export const profileActions = {
    fillProfile: (profile) => ({
        payload: profile,
        type:    types.FILL_PROFILE,
    }),
};
