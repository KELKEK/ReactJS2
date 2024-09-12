import React, { useState } from 'react';

//useState는 함수형 컴포넌트에서 상태관리를 하기위한 Hook
function StateTest1(props) {
    const [color, setColor] = useState("red");
    const [message, setMessage] = useState("");
    const [myStyle, setMystyle] = useState({color:"red", border:"1px solid red"});
    const handleColorChange = (e) => {
        setColor(e.target.innerText);
        setMessage(e.target.innerText + "버튼 누름");
        setMystyle({
            color:`${e.target.innerText}`,
            border:`1px solid ${e.target.innerText}`
        });
    };
    return (
        <div>
            <button onClick={handleColorChange}>RED</button>
            <button onClick={handleColorChange}>GREEN</button>
            <button onClick={handleColorChange}>BLUE</button>
            <h1 style={{color}}>{message}</h1>
            <h1 style={{color:color}}>{message}</h1>
            <h1 style={myStyle}>{message}</h1>
        </div>
    );
}

export default StateTest1;