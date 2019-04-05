
import { groupId, MAIN_URL } from './config';

export const api = {
    posts: {
        create (comment) {
            return fetch(`${MAIN_URL}/feed`, {
                body: JSON.stringify({ comment }),
                headers: {
                    'Content-Type': 'application/json',
                    'x-no-auth': groupId,
                },
                method: 'POST',
            });
        },

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
