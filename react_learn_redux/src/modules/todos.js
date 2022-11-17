// 액션 타입 선언
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const UPDATE_TODO = 'todos/UPDATE_TODO';

// 액션 생성함수 선언
let nextId = 1; // todo 데이터에서 사용할 고유 id
export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        id: nextId++, // 새 항목 추가 후 nextId 값에 1을 더함
        text
    }
});
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

// 수정 버튼이 눌러졌을때 발생할 액션 
export const updateTodo = (targetId, text) => ({
    type: UPDATE_TODO,
    targetId,
    text
});

// 초기상태 선언
// 리듀서의 초기상태는 반드시 객체타입 X . 배열 O 원시타입(숫자, 문자, 불리언) O
const initialState = [
    // 객체안에 들어갈 배열
    /*
    {
        id: 1,
        text: 'test',
        done: false
    }
    */
];

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO :
            return state.concat(action.todo);
        case TOGGLE_TODO :
            return state.map(
                todo => 
                todo.id === action.id // id가 일치하면
                ? {...todo, done: !todo.done} // done 값을 반전
                : todo // 아니라면 그대로
            );
        case UPDATE_TODO : 
            return state.map(
                todo => 
                todo.id === action.targetId // id가 일치하면
                ? {...todo, text: action.text} // text 값을 변경하기 
                : todo // 아니라면 그대로
                )
        default:
            return state;
    }
};