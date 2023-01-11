import React, {useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, toggleTodo, updateTodo } from "../modules/todos";

function TodosContainer() {
    // useSelector에서 반드시 객체를 반환해야할 필요는 없다
    // 한 종류의 값만 조회하고싶을 경우 원하는 값만 바로 반환하면 된다
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onCreate = text => dispatch(addTodo(text));
    const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]); // 최적화를 위해 useCallback 사용
    const onUpdate = useCallback((targetId, text) => dispatch(updateTodo(targetId, text)), [dispatch]);

    return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} onUpdate={onUpdate} />;
}

export default TodosContainer;





// connect 사용해서 구현하기
// import React, {useCallback} from "react";
// import { connect } from "react-redux";
// import Todos from "../components/Todos";
// import {addTodo, toggleTodo} from '../modules/todos';

// function TodosContainer({ todos, addTodo, toggleTodo}) {
//     const onCreate = text => addTodo(text);
//     const onToggle = useCallback(id => toggleTodo(id), [toggleTodo]);
//     // 최적화를 위해 useCallback 사용

//     return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
// };

// export default connect(
//     state => ({todos: state.todos}),
//     {
//         addTodo,
//         toggleTodo
//     }
// )(TodosContainer);