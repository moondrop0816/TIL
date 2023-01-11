import React from "react";
import PostListContainer from "../containers/PostListContainer";
import {Outlet} from 'react-router-dom';

function PostListPage() {
    return (
        <>
            <PostListContainer />
            <Outlet />
        </>
    );
}

export default PostListPage;