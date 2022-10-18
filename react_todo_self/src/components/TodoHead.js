import React from 'react';
import './TodoHead.scss';
import { useTodoState } from '../TodoContext'

function TodoHead() {
    const d = new Date();
    const date = d.getFullYear() + '년 ' + (d.getMonth() + 1) + '월 ' + d.getDate() + '일';
    const day = d.toLocaleDateString('ko-KR', { weekday: 'long' });

    const todos = useTodoState();
    const undoneTasks = todos.filter(todo=> !todo.done);
    
    return (
        <div className="head">
            <div className='head-left'>
                <div className='date'>
                    <h2>{date}</h2>
                    <h3>{day}</h3>
                </div>
                <p className='tasks-left'>남은 할일 {undoneTasks.length}개</p>
            </div>
            {/* 모든 할일이 완료되면 heade-right 나타나게 함 */}
            {undoneTasks.length === 0 ?
            <div className='head-right'>
                Perfect!
                <span role="img" aria-label='Clapping Hands'>👏</span>
            </div>
            : null
            }
        </div>
    );
}

export default TodoHead;