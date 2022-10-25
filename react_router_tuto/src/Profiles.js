import React from "react";
import { NavLink, Routes, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from "./WithRouterSample";
import "./Profiles.css";

const style = {
    background : 'black',
    color: '#fff',
}

const Profiles = () => {
    return (
        <div>
            <h3>유저 목록 :</h3>
            <ul>
                <li>
                    <NavLink style={({isActive}) => isActive ? style : undefined} to="/profiles/harry">harry</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>isActive ? "classStyle" : undefined} to="/profiles/tester11">tester11</NavLink>
                </li>
            </ul>

            <Routes>
                {/* element에 직접 태그 입력 = JSX 렌더링 가능. 상위 영역에서 props등 기타값 전달 가능 */}
                <Route path='/' element={<div>유저를 선택해주세요</div>} /> 
                <Route path=':username' element={<Profile/>} />
            </Routes>
            <WithRouterSample /> {/* 라우트팅이 아니니 Routes 밖에! */}
        </div>
    );
}

export default Profiles;