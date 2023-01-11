import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer() {
    // useSelector : 리덕스 스토어의 상태를 조회하는 Hook
    // state의 값은 store.getState() 를 호출했을때와 같음
    // const { number, diff } = useSelector(state => ({
    //     number: state.counter.number,
    //     diff: state.counter.diff
    // }));

    // useSelector 최적화
    const number = useSelector(state => state.counter.number);
    const diff = useSelector(state => state.counter.diff);

    // useDispatch : 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 Hook
    const dispatch = useDispatch();
    // 각 액션들을 디스패치하는 함수
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return (
        <Counter 
        // 상태와
        number={number} 
        diff={diff}
        // 액션을 디스패치 하는 함수들을 props로 넣어줌
        onIncrease={onIncrease} 
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
        />
    );
}

export default CounterContainer;

