// 리액트 불러오기
import React from 'react';

// 리액트 컴포넌트는 함수형태로 작성할수도 있고 클래스 형태로도 작성할수있다
// 아래의 형태는 "함수형태"로 작성하는 형태

function Hello({color, name, isSpecial}) {
    return <div style={{color}}>
        {/* { isSpecial ? <b>*</b> : null} */}
        { isSpecial && <b>*</b>}
        {/* 삼항연산자. 조건 ? 참 : 거짓
            JSX에서 null, false, undefined를 렌더링하면 아무것도 나타나지 않음. 
         */}
        안녕하세요 {name}
        </div>
    // app에서 전달하는 name을 props라는 파라미터(매개변수)로 받아옴. 
    // props는 객체 형태로 전달되며 name값을 조회하고 싶다면 props.name으로 조회 가능
}

Hello.defaultProps = { // props를 지정하지 않았을때 나타날 기본값들
    name: '이름없음',
}

export default Hello;
// Hello 라는 컴포넌트를 내보내겠다 => 다른 컴포넌트에서 불러와서 사용할 수 있다.