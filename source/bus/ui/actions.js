
import { types } from './types';

export const uiActions = {
    emitError: (error, meta = null) => ({
        error: true,
        meta,
        payload: error,
        type:    types.EMIT_ERROR,
    }),

    startFetching: () => {
        return {
            type: types.START_FETCHING,
        };
    },
    stopFetching: () => {
        return {
            type: types.STOP_FETCHING,
        };
    },
};
