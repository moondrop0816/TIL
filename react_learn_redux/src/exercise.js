import { createStore } from 'redux'; 
// createStore = 스토어를 만들어주는 함수. 
// 리액트 프로젝트에서는 단 하나의 스토어를 만든다. 

// 리덕스에서 관리할 상태 정의
const initialState = {
    counter: 0,
    text: '',
    list: []
};

// 액션 타입 정의 - 주로 대문자로 작성
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// 액션 생성함수 정의 - camelCase로 작성
function increase() {
    return {
        type: INCREASE // 액션 객체의 type 값은 필수
    };
};

// 화살표 함수로 사용시 (추천)
const decrease = () => ({
    type: DECREASE
});

const changeText = text => ({
    type: CHANGE_TEXT,
    text // 액션 안에는 type 외에 추가적인 필드를 자유롭게 넣을 수 있다
});

const addToList = item => ({
    type: ADD_TO_LIST,
    item
});

// 리듀서 만들기
// 위 액션 생성함수들을 통해 만들어진 객체들을 참조하여 새로운 상태를 만드는 함수
// !! 리듀서에서는 불변성을 반드시 지켜야함 !!
function reducer(state = initialState, action) {
    // state의 초기값 = initialState
    switch (action.type) {
        case INCREASE:
            return {
                ...state, 
                counter: state.counter + 1
            };
        case DECREASE :
            return {
                ...state,
                counter: state.counter - 1
            };
        case CHANGE_TEXT :
            return {
                ...state,
                text: action.text
            };
        case ADD_TO_LIST : 
            return {
                ...state,
                list : state.list.concat(action.item)
            }
        default :
            return state; 
    }
};

// 스토어 만들기
const store = createStore(reducer);

console.log(store.getState()); // 현재 store 안에 들어있는 상태 조회

// 스토어 내부의 상태가 바뀔때마다 호출되는 listener 함수
const listener = () => {
    const state = store.getState();
    console.log(state);
};

const unsubscribe = store.subscribe(listener);
// 구독을 해제하고싶을때는 unsubscribe() 호출

// 액션 디스패치
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요!'));
store.dispatch(addToList({ id: 1, text: '야호'}));