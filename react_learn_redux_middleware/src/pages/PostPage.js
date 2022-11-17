import React from "react";
import { useParams } from "react-router-dom";
import PostContainer from "../containers/PostContainer";

function PostPage() {
    const params = useParams(); // url 파라미터 조회하기

    return <PostContainer postId={parseInt(params.id, 10)} />;
}

export default PostPage;

