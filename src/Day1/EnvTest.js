import React from 'react';

function EnvTest(props) {
    console.log("REACT_APP_CHANNEL_ID : " + process.env.REACT_APP_CHANNEL_ID);
    console.log("REACT_APP_CHANNEL_ID2 : " + process.env.REACT_APP_CHANNEL_ID2);
    console.log("PUBLIIC_URL : " + process.env.PUBLIC_URL);
    console.log("REACT_APP_IMAGE_PATH : " + process.env.REACT_APP_IMAGE_PATH);
    //rsf를 적어서 기본 틀을 만듦(class의 경우 rcc)
    return (
        <div>
            <h1>환경변수 사용하기(서버 재시작 필요)</h1>
        </div>
    );
}

export default EnvTest;