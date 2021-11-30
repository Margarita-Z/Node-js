import actions from './actions';
import {getPosts} from './../../../constants/postApi';

const fetchPosts = (requestParams) => {
    return dispatch => {
        dispatch(actions.fetchPostsRequest(requestParams))
            return getPosts(requestParams) 
                .then(result=>{
                    dispatch(actions.fetchPostsSuccess(result))
                    return result;
                })
                .catch(error=>{
                    dispatch(actions.fetchPostsFail(error))
                    return error;
                })
    }
}
export default {
    fetchPosts
}