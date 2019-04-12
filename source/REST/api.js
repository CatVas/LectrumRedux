
import { groupId, MAIN_URL } from './config';

export const api = {
    auth: {
        authenticate () {
            return fetch(`${MAIN_URL}/user/login`, {
                body: JSON.stringify({ token: this.token }),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            });
        },
        login (credentials) {
            return fetch(`${MAIN_URL}/user/login`, {
                body: JSON.stringify(credentials),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            });
        },
        logout () {
            return fetch(`${MAIN_URL}/user/logout`, {
                headers: { Authorization: this.token },
                method: 'GET',
            });
        },
        signup (userInfo) {
            return fetch(`${MAIN_URL}/user/${groupId}`, {
                body: JSON.stringify(userInfo),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            });
        },
    },
    get token() {
        return localStorage.getItem('token');
    },
    posts: {
        create (comment) {
            return fetch(`${MAIN_URL}/feed`, {
                body: JSON.stringify({ comment }),
                headers: {
                    Authorization: this.token,
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            });
        },

        fetch () {
            return fetch(`${MAIN_URL}/feed`, {
                headers: { Authorization: this.token },
                method: 'GET',
            })
        }
    },
};
