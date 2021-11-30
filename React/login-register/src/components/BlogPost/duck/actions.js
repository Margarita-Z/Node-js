import constants from "./constants";

const fetchPostRequest = (requestParams) => {
    return{
        type: constants.GET_POSTS_REQUEST,
        payload:requestParams
    }
}

const fetchPostSuccess = (posts) => {
    return{
        type: constants.GET_POSTS_SUCCESS,
        payload:posts
    }
}

const fetchPostFail = (error) => {
    return{
        type:constants.GET_POSTS_FAIL,
        payload:error
    }
}

export default {
    fetchPostRequest,
    fetchPostSuccess,
    fetchPostFail
}