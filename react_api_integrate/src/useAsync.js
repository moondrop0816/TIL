import { useReducer, useEffect } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'LOADING' :
            return {
                loading: true, // 로딩시 loading true로 변경
                data: null,
                error: null
            };
        case 'SUCCESS' :
            return {
                loading: false,
                data: action.data, // 요청완료(성공)시 data 출력. action.data = state.data = users
                error: null
            }
        case 'ERROR' :
            return {
                loading: false,
                data: null,
                error: action.error // 에러시 에러 내용 출력 action.error 는 e
            }
        default : 
        throw new Error(`Unhandled action type: ${action.type}`);
    }
};

function useAsync(callback, deps = [], skip = false) {
    // callback(API 요청을 시작하는 함수), deps(해당 함수 안에서 사용할 useEffect의 deps).
    // deps는 파라미터가 필요하고, 바뀔때 새로운 데이터를 불러오고 싶은 경우에 활용할 수 있음. 
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: false
    });

    const fetchData = async () => {
        dispatch({type: 'LOADING'});
        try {
            const data = await callback();
            dispatch({type: 'SUCCESS', data});
        } catch (e) {
            dispatch({type: 'ERROR', error: e});
        }
    }

    useEffect(() => {
        if (skip) return; // skip이 true 라면 아무 작업도 하지 않고 return 하도록 함 
        fetchData();
        // eslint 설정을 다음 줄에서만 비활성화
        // eslint-disable-next-line
    }, deps);

    return [state, fetchData]; // 요청 관련 상태와 fetchData 함수 반환. 
}

export default useAsync;