import React from 'react';
import { useTodoState } from '../TodoContext';
import TodoItem from './TodoItem';
import './TodoList.scss';

function TodoList() {
    const todos = useTodoState();

    return (
        <div className='list'>
            {todos.map(todo=>(
                <TodoItem 
                key={todo.id}
                id={todo.id}
                text={todo.text}
                done={todo.done}
                addClass={todo.done ? 'done' : null}
                />
            ))}
            {/* <TodoItem text={'운동하기'} addClass={'done'} />
            <TodoItem text={'과제하기'} addClass={'done'} />
            <TodoItem text={'고양이 사료 사기'} />
            <TodoItem text={'리액트 공부'} /> */}
        </div>
    );
}

export default TodoList;