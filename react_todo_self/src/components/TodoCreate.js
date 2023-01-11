import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';
import './TodoCreate.scss';

function TodoCreate() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(''); // input의 value 관리

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onToggle = () => {
        setOpen(!open);
    }
    const onChange = (e) => setInput(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault(); // 새로고침 방지
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: input,
                done: false,
            }
        });
        nextId.current += 1;
        setOpen(!open);
    }

    // 추가(생성) 기능
    // input의 바뀌는 내용 = input, setInput 으로 관리
    // btn-add가 클릭되면 input의 값으로 dispatch(type:'CREATE')가 실행되어야 함 
    // 내부에 들어가는 내용은 id(nextId), text(input의 value), done: false

    return (
        <>
        {/* open이 참이면 = 토글 on 상태이면 입력폼이 나타남 */}
            { open && 
                <div className='form-box'>
                    <form className='insert-form'>
                        <input type='text' placeholder="할일을 입력해주세요" onChange={onChange}/>
                        <button type='submit' className='btn-add' onClick={onSubmit}>등록</button>
                    </form>
                </div>
            }
            <button 
            type='button' 
            // open이 참일때만 open class 붙게 함
            className={['create-circle', open ? 'open' : null].join(' ')}
            onClick={onToggle}
            >
                <MdAdd />
            </button>
        </>
    );
}

export default TodoCreate;