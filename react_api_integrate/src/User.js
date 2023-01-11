// import React from "react";
// import axios from "axios";
// // import useAsync from "./useAsync";
// import useAsync from 'react-async';

// async function getUser({id}) {
//     const response = await axios.get(
//         `https://jsonplaceholder.typicode.com/users/${id}`
//     );
//     return response.data;
// }

// function User({id}) { // useAsync 사용시 프로미스를 반환하는 함수의 파라미터를 객체 형태로 해주어야 한다 
//     const { data: user, error, isLoading } = useAsync({
//         promiseFn: getUser,
//         id,
//         watch: id // 특정값을 넣으면 값이 바뀔때마다 promiseFn에 넣은 함수를 다시 호출해준다. 
//     });

//     // const [state] = useAsync(() => getUser(id), [id]); // useAsync 사용시 파라미터 포함시켜서 호출(id)
//     // const {loading, data: user, error} = state;

//     // if (loading) return <div>로딩중...</div>;
//     if (isLoading) return <div>로딩중...</div>;
//     if (error) return <div>에러가 발생했습니다</div>
//     if (!user) return null;

//     return (
//         <div>
//             <h2>{user.username}</h2>
//             <p>
//                 <b>Email: </b> {user.email}
//             </p>
//         </div>
//     );
// }

// export default User

// Context 사용시 변경되는 코드
import React, { useEffect } from "react";
import { getUser, useUsersDispatch, useUsersState } from "./UsersContext";

function User({ id }) {
    const state = useUsersState();
    const dispatch = useUsersDispatch();
    useEffect(()=>{
        getUser(dispatch, id);
    }, [dispatch, id]); // id값이 바뀔때마다 getUser를 호출한다. 

    const {data: user, loading, error} = state.user;

    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러가 발생했습니다</div>
    if (!user) return null;

    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email:</b> {user.email}
            </p>
        </div>
    );
}

export default User;