import React from "react";
import { useNavigate } from "react-router-dom";

function HistorySample() {
    const navigate = useNavigate();
    const goBack = () => {
        const confirm = window.confirm('이전 페이지로 이동하시겠습니까?');
        if (confirm) {
            navigate(-1); // 이동할 페이지의 주소나 index 값을 넣는다. 음수는 이전, 양수는 다음페이지 
        }
    };

    const goHome = () => {
        navigate('/');
    };
    
    return (
        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈으로</button>
        </div>
    )
}

export default HistorySample;