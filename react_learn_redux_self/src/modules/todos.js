// 액션 타입
const ADD_TODO = 'todos/ADD_TODO'; // 할일 추가
const DEL_TODO = 'todos/DEL_TODO'; // 할일 삭제
const UPDATE_TODO = 'todos/UPDATE_TODO'; // 할일 수정

// 액션 생성 함수 선언
let nextId = 1; // 각 할일의 id가 될 요소 

export const addTodo = (text) => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text
    }
});

export const delTodo = (id) => ({
    type: DEL_TODO,
    id
});

export const updateTodo = (id, text) => ({
    type: UPDATE_TODO,
    id,
    text
});

// 초기상태
const initialState = [
    {
        id: 0,
        text: '랄랄라',
    }
];

// 리듀서 
export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO :
            return state.concat(action.todo);
            // 할일을 추가해서 새로운 배열 생성
        case DEL_TODO :
            return state.filter(todo => todo.id !== action.id);
            // 할일 중 액션의 id와 다른 id만 모아서 새로운 배열 생성
            // => 액션의 id를 제외한 id만으로 구성된 배열 = 삭제
        case UPDATE_TODO :
            return state.map(
                todo => 
                todo.id === action.id ? 
                { ...todo, text: action.text }
                : todo
            )
            // todo와 액션의 id가 일치하면 액션의 텍스트로 내용 수정해서 새 배열 생성 
        default:
            return state;
    }
};