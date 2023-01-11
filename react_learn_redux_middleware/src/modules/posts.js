import * as postsAPI from '../api/posts'; // api/posts 안의 함수 모두 불러오기
import { 
    createPromiseThunk, 
    reducerUtils,
    handleAsyncActions,
    createPromiseThunkById,
    handleAsyncActionsById
} from '../lib/asyncUtils';

// 액션 타입

// 포스트 여러개 조회하기
const GET_POSTS = 'GET_POSTS'; // 요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패

// 포스트 하나 조회하기
const GET_POST = 'GET_POST'; // 요청 시작
const GET_POST_SUCCESS = 'GET_POST_SUCCESS'; // 요청 성공
const GET_POST_ERROR = 'GET_POST_ERROR'; // 요청 실패

// 포스트 비우기
// const CLEAR_POST = 'CLEAR_POST';

// thunk 사용시 꼭 모든 액션들에 대해 액션 생성함수를 만들 필요는 없다. 
// 그냥 thunk 함수에서 바로 액션 객체를 만들어줘도 된다!
// => 리팩토링

export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPostById);

// export const clearPost = () => ({type: CLEAR_POST});

// export const getPosts = () => async dispatch => {
//     dispatch({type: GET_POSTS}); // 요청이 시작됨
//     try {
//         const posts = await postsAPI.getPosts(); // API 호출
//         dispatch({type: GET_POSTS_SUCCESS, posts}); // 성공
//     } catch (e) {
//         dispatch({type: GET_POSTS_ERROR, error: e}); // 실패
//     }
// };

// // thunk 함수에서도 파라미터를 받아와서 사용할 수 있다
// export const getPost = id => async dispatch => {
//     dispatch({ type: GET_POST }); // 요청 시작
//     try {
//         const post = await postsAPI.getPostById(id); // API 호출
//         dispatch({ type: GET_POST_SUCCESS, post }); // 성공
//     } catch (e) {
//         dispatch({ type: GET_POST_ERROR, error: e}); // 실패
//     }
// };

// => 리팩토링
const initialState = {
    posts: reducerUtils.initial(),
    post: reducerUtils.initial()
}

// const initialState = {
//     posts: {
//         loading: false,
//         data: null,
//         error: null
//     },
//     post : {
//         loading: false,
//         data: null,
//         error: null
//     }
// };

// => 최종 리팩토링
export default function posts(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS: 
        case GET_POSTS_SUCCESS: 
        case GET_POSTS_ERROR: 
            return handleAsyncActions(GET_POSTS, 'posts', true)(state, action);
        case GET_POST: 
        case GET_POST_SUCCESS: 
        case GET_POST_ERROR: 
            return handleAsyncActionsById(GET_POST, 'post', true)(state, action);
        // case CLEAR_POST :
        //     return {
        //         ...state,
        //         post: reducerUtils.initial()
        //     }
        default: 
            return state;
    }
};
// // => 리팩토링
// export default function posts(state = initialState, action) {
//     switch (action.type) {
//         case GET_POSTS: 
//             return {
//                 ...state,
//                 posts: reducerUtils.loading()
//             }
//         case GET_POSTS_SUCCESS: 
//             return {
//                 ...state,
//                 posts: reducerUtils.success(action.payload) // action.posts가 변경됨
//             }
//         case GET_POSTS_ERROR: 
//             return {
//                 ...state,
//                 posts: reducerUtils.error(action.error)
//             }
//         case GET_POST: 
//             return {
//                 ...state,
//                 post: reducerUtils.loading()
//             }
//         case GET_POST_SUCCESS: 
//             return {
//                 ...state,
//                 post: reducerUtils.success(action.payload)
//             }
//         case GET_POST_ERROR: 
//             return {
//                 ...state,
//                 post: reducerUtils.error(action.error)
//             }
//         default: 
//             return state;
//     }
// };

// export default function posts(state = initialState, action) {
//     switch (action.type) {
//         case GET_POSTS: 
//             return {
//                 ...state,
//                 posts: {
//                     loading: true,
//                     data: null,
//                     error: null
//                 }
//             }
//         case GET_POSTS_SUCCESS: 
//             return {
//                 ...state,
//                 posts: {
//                     loading: true,
//                     data: action.posts,
//                     error: null
//                 }
//             }
//         case GET_POSTS_ERROR: 
//             return {
//                 ...state,
//                 posts: {
//                     loading: true,
//                     data: null,
//                     error: action.error
//                 }
//             }
//         case GET_POST: 
//             return {
//                 ...state,
//                 post: {
//                     loading: true,
//                     data: null,
//                     error: null
//                 }
//             }
//         case GET_POST_SUCCESS: 
//             return {
//                 ...state,
//                 post: {
//                     loading: true,
//                     data: action.post,
//                     error: null
//                 }
//             }
//         case GET_POST_ERROR: 
//             return {
//                 ...state,
//                 post: {
//                     loading: true,
//                     data: null,
//                     error: action.error
//                 }
//             }
//         default: 
//             return state;
//     }
// };


