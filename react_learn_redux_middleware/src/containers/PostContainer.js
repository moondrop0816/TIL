import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../modules/posts";
import Post from "../components/Post";

function PostContainer({ postId }) {
    const { data, loading, error } = useSelector(
        state => state.posts.post[postId]
        ) || {
            loading: false,
            data: null,
            error: null
        }; // 아예 데이터가 존재하지 않을때가 있으므로 비구조화 할당이 오류나지 않게 함 
    const dispatch = useDispatch();

    useEffect(() => {
        // if (data) return; // 포스트가 존재하면 아예 요청하지 않음
        dispatch(getPost(postId));
    }, [postId, dispatch]);

    if (loading && !data) return <div>로딩중...</div>;
    if (error) return <div>에러발생!</div>;
    if (!data) return null;

    return <Post post={data} />;
}

export default PostContainer;


