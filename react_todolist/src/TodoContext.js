import React, { createContext, useContext, useReducer, useRef } from "react";

const initialTodos = [
    {
        id: 1,
        text: '프로젝트 생성하기',
        done: true
    }, 
    {
        id: 2,
        text: '컴포넌트 스타일링하기',
        done: true
    }, 
    {
        id: 3,
        text: 'context 만들기',
        done: false
    }, 
    {
        id: 4,
        text: '기능구현하기',
        done: false
    }, 
];

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE' : 
            return state.concat(action.todo);
        case 'TOGGLE' :
            return state.map(todo => 
                todo.id === action.id ? {...todo, done: !todo.done } : todo
            );
        case 'REMOVE' : 
            return state.filter(todo => todo.id !== action.id);
        default: 
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext(); // state context
const TodoDispatchContext = createContext(); // dispatch context
const TodoNextIdContext = createContext(); // nextId context

export function TodoProvider({ children }) {
    // state = iniitalTodos, dispatch = todoReducer
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return (
        // context에서 사용할 값 지정할때 
        // Provider 컴포넌트 렌더링 하고 value 설정해줌. props로 받아온 children 값 내부에 렌더링. 
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    { children }
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

// Custom Hooks 
export function useTodoState() {
    const context = useContext(TodoStateContext);

    // context가 TodoProvider로 감싸져 있지 않다면 에러 발생시키기 
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext);

    // context가 TodoProvider로 감싸져 있지 않다면 에러 발생시키기 
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext);

    // context가 TodoProvider로 감싸져 있지 않다면 에러 발생시키기 
    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}