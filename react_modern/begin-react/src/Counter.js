import React, {useState} from "react";
// 리액트에서 useState 불러오기

function Counter() {
    const [number, setNumber] = useState(0);
    // 아래의 코드 세줄과 같음
    // const numberState = useState(0); - 상태의 기본값을 파라미터로 넣어서 호출. 호출시에는 배열이 반환됨
    // const number = numberState[0]; - 반환되는 배열의 첫번째원소. 현재 상태.
    // const setNumber = numberState[1]; - 반환되는 배열의 두번째 요소. Setter 함수. Setter는 파라미터로 전달받은 값을 최신 상태로 설정해줌.

    const onIncrease = () => {
        // console.log('+1');
        // setNumber(number + 1)
        setNumber(prevNumber => prevNumber + 1);
    }

    const onDecrease = () => {
        // console.log('-1');
        // setNumber(number - 1)
        setNumber(prevNumber => prevNumber - 1);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            {/* 클릭시 onIncrease 실행 */}
            <button onClick={onDecrease}>-1</button>
            {/* 클릭시 onDecrease 실행 */}
        </div>
    )
}

export default Counter;