import React, {useRef, useState} from "react";
import Hello from "./Hello";
import './App.css';
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본단위는 px
    padding: '1rem' // 다른 단위 사용시 문자열로 설정한다 
  };

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs, 
      [name]: value
    });
  }

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'Hailey',
        email: 'hailey001@gmail.com',
        active: true,
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester0000@abc.com',
        active: false,
    },
    {
        id: 3,
        username: 'Apple',
        email: 'greenred@def.com',
        active: false,
    },
]);

const nextId = useRef(4);
const onCreate = () => {
  const user = {
    id: nextId.current,
    username,
    email
  };
  // setUsers([...users, user]); // spred 연산자 사용
  setUsers(users.concat(user));

  setInputs({
    username: '',
    email:''
  });

  nextId.current += 1;
};

const onRemove = id => {
  // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬.
  // = user.id가 id인것을 제거함
  setUsers(users.filter(user => user.id !== id));
};

const onToggle = id => {
  setUsers(
    users.map(user => 
      user.id === id ? {...user, active: !user.active} : user
      // user.id가 id와 같다면 
      // id, username, email은 그대로. active의 내용만 반전시킴
      // 그렇지 않다면 변경없이 그대로 둠
      )
  );
};

// 숙제
const onEdit = () => {
  setInputs({
    username: username,
    email:email
  });
};

  return (
    // fragment 
    <> 
      {/* 주석은 화면에 보이지 않습니다 */}
      /* 중괄호로 감싸지 않으면 화면에 보입니다. */
      <Wrapper>
        <Hello 
          // 열린 태그 내부에 주석달기
          name = "react" // app에서 hello를 사용할때 name이라는 값을 전달
          color = "red"
          isSpecial
        />
        <Hello color="pink"></Hello>
      </Wrapper>
      <div style={style}>{name}</div>
      <div className="gray-box"></div>

      <br></br>
      <br></br>

      <Counter />

      <br></br>
      <br></br>

      <InputSample />

      <br></br>
      <br></br>

      <CreateUser
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
       />
      <UserList 
      users={users} 
      onRemove={onRemove} 
      onToggle={onToggle} 
      onEdit={onEdit}
      />

    </>
  );
}

export default App;
