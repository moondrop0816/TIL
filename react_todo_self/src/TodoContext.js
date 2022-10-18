import React, {createContext, useContext, useReducer, useRef} from "react";


const initialState = [ // = todos 가 될 것. =state. 
    {
        id: 1,
        text: '운동하기',
        done: true,
    }, 
    {
        id: 2,
        text: '과제하기',
        done: true,
    }, 
    {
        id: 3,
        text: '고양이 사료 사기',
        done: false,
    }, 
    {
        id: 4,
        text: '리액트 공부',
        done: false,
    }, 
]

// Reducer
function todoReducer(state, action) {
    // state(현재상태), action(액션객체. 업데이트를 위한 정보 있음) => 새로운 상태를 반환. = 컴포넌트가 지닐 새로운 상태. 
    // action = dispatch. 
    switch (action.type) {
        // 추가(생성)
        case 'CREATE' :
            return state.concat(action.todo);
            // 불변성을 지키기 위해 새로운 배열을 만드는 함수를 사용. (concat)
            
        // 할일 완료(토글)
        case 'TOGGLE' :
            return state.map( todo=> todo.id === action.id ? {...todo, done: !todo.done} : todo);
            // 상태에 있는 id와 이벤트가 생긴 id가 같으면 나며지는 그대로 가져오고 done의 value 만 값을 반대로 바꾼다 
            
        // 삭제
        case 'REMOVE' : 
        return state.filter(todo=> todo.id !== action.id);
        // action.id와 다른 id를 가진 요소들로만 새로운 배열을 만든다 (불변성 지키기)
                
        // 수정
        case 'UPDATE' : 
        return state.map(todo=> todo.id === action.id ? {...todo, text: action.inpEdit} : todo);

        default: return null;
    }
}

// 필요한 부분에서 따로 사용할 수 있도록 state / dispatch context 분리해서 만들기
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

// TodoProvider로 내보내기 
export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    // state = 컴포넌트에서 사용할 수 있는 상태. dispatch = 액션을 발생시키는 함수. 

    const nextId = useRef(5);


    return (
        // context 생성 시 provider 컴포넌트 생김. context의 값 정해줌. 
        // context에서 사용할 값 지정할때 provider의 value 설정함
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children} 
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

// useContext를 사용하는 커스텀 Hook 생성
export function useTodoState() {
    const context = useContext(TodoStateContext)

    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoDispatch() {
    const context = useContext(TodoDispatchContext)

    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

export function useTodoNextId() {
    const context = useContext(TodoNextIdContext)

    if (!context) {
        throw new Error('Cannot find TodoProvider');
    }
    return context;
}

