
import { groupId, MAIN_URL } from './config';

export const api = {
    posts: {
        fetch () {
            return fetch(`${MAIN_URL}/feed`, {
                headers: {
                    'x-no-auth': groupId,
                },
                method: 'GET',
            })
        }
    },
};
