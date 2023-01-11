import React from "react";
import { useParams } from "react-router-dom";

const profileData = {
    harry : {
        name: "박혜원",
        description : "리액트 공부중"
    },
    tester11 : {
        name: '김철수',
        description : '테스트 유저'
    }
};

const Profile = () => {
    // V5 -> V6 useParams()로 변경됨 
    // useParams() 사용해서 파라미터 읽어오기 
    const {username} = useParams();
    const profile = profileData[username];
    if (!profile) {
        return <div>존재하지 않는 유저입니다.</div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    )
};

export default Profile;
