// 액션 타입
const ADD_MODE = 'edit/ADD_MODE'; // 등록모드
const EDIT_MODE = 'edit/EDIT_MODE'; // 수정모드
const SET_TARGET_ID = 'edit/SET_TARGET_ID'; // 수정시 해당하는 할일의 id 저장

// 액션 생성 함수 선언
export const addMode = () => ({
    type: ADD_MODE,
});

export const editMode = () => ({
    type: EDIT_MODE,

});

export const setTargetId = (id) => ({
    type: SET_TARGET_ID,
    id
});

// 초기상태
const initialState = {
    editYN: false, // 수정모드 전환용 
    targetId: 0 // 수정하는 할일의 id 저장용 
};

// 리듀서 
export default function edit(state=initialState, action) {
    switch (action.type) {
        case ADD_MODE : {
            return {
                ...state,
                editYN: false
            }
        }
        case EDIT_MODE : {
            return {
                ...state,
                editYN: true
            }
        }
        case SET_TARGET_ID: {
            return {
                ...state,
                targetId: action.id
            }
        }
        default: 
        return state;
    }
}