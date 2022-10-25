import React from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
  const {pathname} = useLocation();
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
        <li>
          <Link to="/history">useNavigate 예제</Link>
        </li>
      </ul>
      <HistorySample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/*" element={<Profiles />} />
        {/* path를 따로 정의하지 않으면 모든 상황에 렌더링 됨 */}
        <Route path='/*' element={<h1>이 페이지는 존재하지 않는 페이지 입니다. - { pathname }</h1>}/>
      </Routes>
    </div>
  );
};

export default App;