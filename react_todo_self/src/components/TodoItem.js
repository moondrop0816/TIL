import React, { useState } from 'react';
import { MdDone, MdDelete, MdEdit } from 'react-icons/md';
import './TodoItem.scss';
import { useTodoDispatch } from '../TodoContext'

function TodoItem({addClass, id, text}) {
    const [editYN, setEditYN] = useState('N'); // 수정모드/입력모드 상태 나타냄. 
    const [inpEdit, setInpEdit] = useState(text); // 수정 인풋의 상태와 함수. 기존 값은 유지해야하니까 useState의 기본값은 text(수정이전값)을 넣어줌 
    const dispatch = useTodoDispatch();

    const onToggle = () => dispatch({type:'TOGGLE', id});
    const onRemove = () => dispatch({type:'REMOVE', id});

    const onEdit = () => setEditYN('Y');
    const onChange = (e) => {
        setInpEdit(e.target.value); // 수정 인풋의 내용이 바뀌면 수정 인풋의 상태를 변경해줌 
    }
    const onUpdate = () => {
        dispatch({type:'UPDATE', id, inpEdit}); // 수정된 텍스트를 가져감 
        setEditYN('N');
    }
    
    return (
        // addClass = 애니메이션 처리 등으로 추가되는 클래스 이름 props
        <div className={`item ${addClass}`}>
            <div className='item-check' onClick={onToggle}>
                <MdDone />
            </div>
            {editYN === 'N' ? 
            <>
            <p className='item-text' onClick={onEdit}>{text}</p>
            <button type='button' 
            className='item-remove' 
            onClick={onRemove}>
                <MdDelete />
            </button>
            </>
            :
            <>
            <input type='text' defaultValue={text} onChange={onChange}/>
            <button type='button' 
            className='item-update' 
            onClick={onUpdate}>
                <MdEdit />
            </button>
            </>
            }
        </div>
    );
}

TodoItem.defaultProps = {
    addClass: ''
}

export default React.memo(TodoItem);
// React.memo() : 다른항목이 업데이트 될때 불필요한 리렌더링 방지