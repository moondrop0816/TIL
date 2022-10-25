// import React, {useState} from 'react';
// import axios from 'axios';
// // import useAsync from './useAsync';
// import { useAsync } from 'react-async';
// import User from './User';

// // useAsync 에서는 Promise 의 결과를 바로 data 에 담기 때문에,
// // 요청을 한 이후 response 에서 data 추출하여 반환하는 함수를 따로 만들었습니다.
// async function getUsers() {
//     const response = await axios.get(
//         'https://jsonplaceholder.typicode.com/users'
//     )

//     return response.data;
// }

// // function reducer(state, action) {
// //     switch (action.type) {
// //         case 'LOADING' :
// //             return {
// //                 loading: true, // 로딩시 loading true로 변경
// //                 data: null,
// //                 error: null
// //             };
// //         case 'SUCCESS' :
// //             return {
// //                 loading: false,
// //                 data: action.data, // 요청완료(성공)시 data 출력. action.data = state.data = users
// //                 error: null
// //             }
// //         case 'ERROR' :
// //             return {
// //                 loading: false,
// //                 data: null,
// //                 error: action.error // 에러시 에러 내용 출력 action.error 는 e
// //             }
// //         default : 
// //         throw new Error(`Unhandled action type: ${action.type}`);
// //     }
// // };

// function Users() {
//     const [userId, setUserId] = useState(null); // 클릭된 id 상태 관리 
//     // const { data: users, error, isLoading, run } = useAsync({
//     const { data: users, error, isLoading, reload } = useAsync({
//         promiseFn: getUsers,
//         // deferFn: getUsers // 특정 인터렉션에 따라 API를 호출하고 싶을때 deferFn, run을 사용
//     });
//     // const [state, refetch] = useAsync(getUsers, [], true); // skip이 true

//     // const [state, dispatch] = useReducer(reducer, {
//     //     loading: false, // 로딩 상태
//     //     data: null, // 요청 결과
//     //     error: null // 에러 상태
//     // });

//     // const [users, setUsers] = useState(null); // 요청 결과 관리
//     // const [loading, setLoading] = useState(false); // 로딩 상태 관리
//     // const [error, setError] = useState(null); // 에러 상태 관리

//     // const fetchUsers = async () => {
//     //     dispatch({type: 'LOADING'});
//     //     try {
//     //         const response = await axios.get(
//     //             'https://jsonplaceholder.typicode.com/users'
//     //         );
//     //         dispatch({type: 'SUCCESS', data: response.data})
//     //     } catch (e) {
//     //         dispatch({type: 'ERROR', error: e})
//     //     }
//     // };
//     // const fetchUsers = async () => {
//     //     try {
//     //         // 요청이 시작될때는 error, users 초기화하고
//     //         setError(null);
//     //         setUsers(null);
//     //         // loading 상태 true로 변경 = 로딩중
//     //         setLoading(true);
//     //         const response = await axios.get(
//     //             'https://jsonplaceholder.typicode.com/users'
//     //         );
//     //         setUsers(response.data); // 데이터는 response.data 안에 있다
//     //     } catch (e) {
//     //         setError(e);
//     //     }
//     //     setLoading(false);
//     // };

//     // useEffect(() => {
//     //     fetchUsers();
//     // }, []); // 지켜볼 deps가 없으므로 최초 1번만 실행

//     // const { loading, data: users, error} = state; // state.data를 users 키워드로 조회

//     if (isLoading) return <div>로딩중...</div>; // 로딩상태 활성화
//     // if (loading) return <div>로딩중...</div>; // 로딩상태 활성화
//     if (error) return <div>에러가 발생했습니다</div>;
//     // if (!users) return null; // users 값이 아직 없을때 
//     if (!users) return <button onClick={reload}>불러오기</button>; // users 값이 아직 없을때 
//     // if (!users) return <button onClick={run}>불러오기</button>; // users 값이 아직 없을때 
//     // if (!users) return <button onClick={refetch}>불러오기</button>; // users 값이 아직 없을때 

//     return (
//         <>
//             <ul>
//                 {users.map(user => (
//                     <li 
//                     key={user.id}
//                     onClick={() => setUserId(user.id)} // 클릭시 이 id로 userId 상태 변경 
//                     style={{cursor:'pointer'}}
//                     >
//                         {user.username} ({user.name})
//                     </li>
//                 ))}
//             </ul>
//             <button onClick={reload}>다시 불러오기</button>
//             {/* <button onClick={refetch}>다시 불러오기</button> */}
//             {userId && <User id={userId}/>}
//         </>
//     );
// }

// export default Users;




// Context 사용시 변경되는 코드
import React, { useState } from "react";
import { getUsers, useUsersDispatch, useUsersState } from "./UsersContext";
import User from "./User";

function Users() {
    const [userId, setUserId] = useState(null);
    const state = useUsersState();
    const dispatch = useUsersDispatch();

    const {data: users, loading, error} = state.users;
    const fetchData = () => {
        getUsers(dispatch);
    };

    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러가 발생했습니다</div>
    if (!users) return <button onClick={fetchData}>불러오기</button>;

    return (
        <>
            <ul>
                {users.map(user => (
                    <li
                    key={user.id}
                    onClick={()=>setUserId(user.id)}
                    style={{cursor:'pointer'}}>
                        {user.username} ({user.name})
                    </li>
                ))}
                <button onClick={fetchData}>다시 불러오기</button>
                {userId && <User id={userId} />}
            </ul>
        </>
    );
}

export default Users;