import React from "react";
import Todos from "../components/Todos";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, delTodo, updateTodo } from "../modules/todos";
import { addMode, editMode, setTargetId } from "../modules/edit";

function TodosContainer() {
    const todos = useSelector(state => state.todos);
    const edit = useSelector(state => state.edit);

    const dispatch = useDispatch();

    const onCreate = (text) => {dispatch(addTodo(text))};
    const onDelete = (id) => {dispatch(delTodo(id))};
    const onUpdate = (id, text) => {dispatch(updateTodo(id, text))};

    const onAddMode = () => {dispatch(addMode())};
    const onEditMode = () => {dispatch(editMode())};
    const onSetTarget = (id) => {dispatch(setTargetId(id))};

    return (
        <Todos 
        todos={todos} 
        edit={edit} 
        onCreate={onCreate} 
        onDelete={onDelete} 
        onUpdate={onUpdate}
        onAddMode={onAddMode}
        onEditMode={onEditMode} 
        onSetTarget={onSetTarget} />
    );
}

export default TodosContainer;