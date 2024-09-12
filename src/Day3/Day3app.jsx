import React, { useEffect, useState } from 'react';
import ControllerButton from './ControllerButton';
import DisplayCount from './DisplayCount';

function Day3app(props) {
    //data 상태 관리, 값 변경 시 자동으로 UI에 적음... 함수형 컴포넌트에서 useState()를 사용한다.
    const [count, setCount] = useState(0);
    const clickHandler =(e) => {
        //의미 : count = count + Number(e.targer.innerText)
        //setter는 함수가 끝나야 값이 반영되므로, 이 전에 console.log 등으로 count를 찍어내봐도 set 하기 전의 값 count이 나온다. 
        setCount(count + Number(e.target.innerText));
    }
    const clickHandler2 =(value) => {
        setCount(count + value);
    }

    //life cycle관리할 때 사용되는 Hook
    useEffect(()=>{
        console.log("count가 변경되면 수행한다." + count);
    }, [count]);
    return (
        <div>
            <h1>Count App</h1>
            <DisplayCount count = {count}></DisplayCount>
            <ControllerButton clickHandler = {clickHandler} clickHandler2 = {clickHandler2}></ControllerButton>
        </div>
    );
}

export default Day3app;