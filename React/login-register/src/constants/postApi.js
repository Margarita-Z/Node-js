import { API_BASE_URL } from './../constants/apiConstants';

export const getPosts = () => {
    return fetch(`${API_BASE_URL.root}/posts`)
        .then(res => res.json())
        .then(json => Promise.resolve(json))
        .catch(err => Promise.reject(err))
}