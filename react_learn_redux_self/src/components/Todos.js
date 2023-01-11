import React, { useState } from "react";

function TodoItem({ todo, onDelete, onEditSet }) {
    return (
        <li>
            <span onClick={()=> {onEditSet(todo.id, todo.text)}}>
                {todo.text}
            </span>
            <button type="button"
            onClick={()=>onDelete(todo.id)}>삭제</button>
        </li>
    );
};

function TodoList({ todos, onDelete, onEditSet }) {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEditSet={onEditSet}/>
            ))}
        </ul>
    );
};

function Todos({todos, edit, onCreate, onDelete, onEditMode, onSetTarget, onUpdate, onAddMode }) {
    const [text, setText] = useState(''); // 할일 텍스트를 저장할 state

    const onChange = (e) => setText(e.target.value); 

    const onSubmit = () => { // 할일 등록함수
        onCreate(text); // 할일 생성
        setText(''); // 인풋 초기화
    };
    const onEditSet = (id, text) => { // 수정모드 전환 함수 
        onEditMode(); // 수정모드 전환
        onSetTarget(id); // 선택된 할일 id를 타겟으로 지정
        setText(text); // 인풋에 해당 할일읠 텍스트 나타나게 함
    }
    const onReset = () => { // 초기화 함수
        onAddMode(); // 등록모드
        setText(''); // 인풋 초기화 
    };


    return (
        <div>
            <form>
                <input value={text} placeholder="할일을 입력하세요" onChange={onChange} />
                { edit.editYN ?
                <button type="button"
                onClick={()=>{
                    onUpdate(edit.targetId, text)
                    onReset()
                }}>수정하기</button>
                : 
                <button type="button" onClick={onSubmit}>등록하기</button>
                }
            </form>
            <TodoList todos={todos} edit={edit} onDelete={onDelete} onEditSet={onEditSet} />
        </div>
    );
};

export default Todos;