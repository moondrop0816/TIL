import React from "react";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import Counter from "../components/Counter";
import { decrease, increase, setDiff } from "../modules/counter";

// 액션 생성함수 이름이 변경되어 props 이름도 변경됨
// ex) onIncrease -> increase
function CounterContainer2({ number, diff, increase, decrease, setDiff}) {
    return (
        <Counter 
        // 상태와
        number={number}
        diff={diff}
        // 액션을 디스패치하는 함수들을 props로 넣어줌
        onIncrease={increase}
        onDecrease={decrease}
        onSetDiff={setDiff}/>
    );
};

// mapStateToProps : 리덕스 스토어의 상태를 조회해서 어떤 것들을 props로 넣어줄지 정의
// 현재 리덕스 상태를 파라미터로 받아옴 
const mapStateToProps = state => ({
    number: state.counter.number,
    diff: state.counter.diff
});

// mapDispatchToProps : 액션을 디스패치 하는 함수를 만들어서 props로 넣어줌
// dispatch를 파라미터로 받아옴

// mapDispatchToProps가 함수가 아니라 객체라면 bindActionCreators를 connect에서 대신 해준다
const mapDispatchToProps = {
    increase,
    decrease,
    setDiff
};
// const mapDispatchToProps = dispatch => 
// // bindActionCreators : 사용시 자동으로 액션 생성함수에 dispatch가 감싸진 상태로 호출할 수 있다. 
// bindActionCreators(
//     {
//         increase,
//         decrease,
//         setDiff
//     },
//     dispatch
// );
// ({ 
    // onIncrease: () => dispatch(increase()),
    // onDecrease: () => dispatch(decrease()),
    // onSetDiff: diff => dispatch(setDiff(diff)),
// });

// connect 함수에는 mapStateToProps, mapDispatchToProps를 인자로 넣는다
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer2);

// 위 코드는 다음과 같다
// const enhance = connect(mapStateToProps, mapDispatchToProps);
// export defualt enhance(CounterContainer);
