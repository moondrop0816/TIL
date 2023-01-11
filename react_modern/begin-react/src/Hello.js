import React from 'react';

function Hello({ color, name, isSpecial  }) {
//const props = {name:"react", color:"red"}
//color = {color:"red"}
//number type : 0 (false)
//string type : "" (false)
//null, undefined, NaN, infinity : (false)
//boolean : false (false)
  return <div style={{color }}>
    { isSpecial ? <b>*</b> : null }
    {isSpecial && <b>*</b>}
    안녕하세요 {name}
  </div>
}

Hello.defaultProps = {
    name: '이름없음'
  }

export default Hello;