import constants from './constants';

const initialState = {
    posts: [{
        title: '',
        content: ''
    }],
    message: undefined
}

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case constants.GET_POSTS_REQUEST:
            return {
                ...state
            }

        case constants.GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload
            }

        case constants.GET_POSTS_FAIL:
            return {
                ...state,
                message: action.payload
            }


        default: return state;
    }
}