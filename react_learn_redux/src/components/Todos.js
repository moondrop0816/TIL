import React, { useState } from "react";

// 컴포넌트 최적화를 위해 React.memo 사용
const TodoItem = React.memo(function TodoItem({ todo, onToggle, onEdit }){
    return (
        <li
        // style={{ textDecoration: todo.done ? 'line-through' : 'none'}}
        // onClick={()=> onToggle(todo.id)}
        onClick={() => onEdit(todo.id, todo.text)} // 클릭시 onEdit 이벤트 발생. id와 text 파라미터로 보냄 
        >{todo.text}</li>
    );
});

// 컴포넌트 최적화를 위해 React.memo 사용
const TodoList = React.memo(function TodoList({todos, onToggle, onEdit}){
    return (
        <ul>
            {todos.map(todo=> (
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onEdit={onEdit}/>
            ))}
        </ul>
    );
});

function Todos({todos, onCreate, onToggle, onUpdate}) {
    // 리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리해아하는 것은 아니다
    const [text, setText] = useState('');
    const [editYN, setEditYN] = useState(false); // 수정모드 전환용 state
    const [targetId, setTargetId] = useState(0); // 선택된 요소의 id를 기억할 state 
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault(); // submit 이벤트 발생시 새로고침 방지
        onCreate(text);
        setText(''); // 인풋 초기화
    }
    const onEdit = (id, text) => {
        setText(text); // input의 value를 todo.text로 변경
        setTargetId(id); // targetId를 클릭된 요소의 id로 변경
        setEditYN(true); // 수정모드 true 
    }
    const onReset = () => {
        setText('');
        setTargetId(0);
        setEditYN(false);
    };

    return (
        <div>
            <form>
                <input 
                value={text}
                placeholder="할일을 입력해주세요"
                onChange={onChange} />
                { editYN ? 
                <button type="button" onClick={() => {
                    onUpdate(targetId, text) // 내용수정 이벤트
                    onReset() // 수정후 초기화 이벤트
                }}>수정</button>
                :
                <button type="button" onClick={onSubmit}>등록</button>
                }
            </form>
            <TodoList todos={todos} onToggle={onToggle} onEdit={onEdit} />
        </div>
    );
}

export default Todos;