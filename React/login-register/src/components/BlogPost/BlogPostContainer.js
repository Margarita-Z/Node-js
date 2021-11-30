import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {BlogPostComponent} from './BlogPostComponenet';
import {postsOperations} from './duck';

export default function BlogPostContainer(){

    const posts = useSelector(state=> state.postsReducer.posts);
    const error = useSelector(state=> state.postsReducer.error);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(postsOperations.fetchPosts());
    },[dispatch])

    return(
        <div id="blogPost-container">
            <BlogPostComponent 
                posts={posts}
                error={error}
            />
        </div>
    )
}