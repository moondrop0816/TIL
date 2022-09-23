import React from "react";

function User({user, onRemove, onToggle, onEdit}) {
    return (
        <div>
            <b
            style={{
                cursor: 'pointer',
                color: user.active ? 'green' : 'black'
                // user.active가 참이면 green 아니면 black
            }}
            onClick={() => onToggle(user.id)}
            >{user.username}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
            <button onClick={() => onEdit()}>수정</button>
        </div>
    )
}

function UserList({users, onRemove, onToggle, onEdit}) {
    
    return (
        <div>
            {/* 1. 그냥 코드 작성하기 */}
            {/* <div>
                <b>{users[0].username}</b> <span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b> <span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b> <span>({users[0].email})</span>
            </div> */}

            {/* 2. 재사용할수 있게 컴포넌트 만들어주기 */}
            {/* <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/> */}

            {/* 3. map 함수 사용하기 */}
            {users.map(user => (
                <User 
                user={user} 
                key={user.id} 
                onRemove={onRemove}
                onToggle={onToggle}
                onEdit={onEdit}
                />
            ))}
        </div>
    );
}

export default UserList;