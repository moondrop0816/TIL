const myLogger = store => next => action => {
    console.log(action); // 액션 출력
    const result = next(action); // 다음 미들웨어 (또는 리듀서)에게 액션을 전달

    // 업데이트 이후의 상태 조회
    console.log('\t', store.getState()); // \t는 탭 문자 
    
    return result; // 여기서 ㄴ반환하는 값은 dispatch(action)의 결과물이 된다. 기본값은 undefined;
};

export default myLogger;