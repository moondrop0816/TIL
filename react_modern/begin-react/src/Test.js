import React from 'react';

function Test({ color, name }) {
  return <div>이곳은 테스트</div>
}

Test.defaultProps = {
    name: '이름없음'
  }

export default Test;