import React, { useEffect, useState } from 'react';

function TimerDisplay() {
    const [currentTime, setCurrentTime] = useState("00:00:00");

    const now = () => {
        const date = new Date();
        const h = String(date.getHours()).padStart(2, "0");
        const m = String(date.getMinutes()).padStart(2, "0");
        const s = String(date.getSeconds()).padStart(2, "0");
        setCurrentTime(`${h}:${m}:${s}`); // currentTime 상태를 변경
        console.log("타이머 실행");
    };

    useEffect(() => {
        const timer = setTimeout(now, 1000); // 1초 후 now() 메서드를 호출
        return () => {
            clearTimeout(timer);
            console.log("timer 변수가 제거됨");
        };
    }, [currentTime]); // currentTime 상태값이 변경될 때마다 실행

    return <h2>Current Time: {currentTime}</h2>;
}

function MyTimer(props) {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [showYN, setShowYN] = useState(true);

    const changehandler = () => {
        setShowYN(!showYN);
    };

    useEffect(() => {
        console.log("rendering될 때마다 실행된다.(의존 배열 생략)");
    });

    useEffect(() => {
        console.log("rendering될 때, count 변경시마다 실행된다.(빈 의존 배열)");
    }, []);

    useEffect(() => {
        console.log("rendering될 때, count 변경시마다 실행된다.");
    }, [count]);

    useEffect(() => {
        console.log("rendering될 때, count2 변경시마다 실행된다.");
    }, [count2]);

    useEffect(() => {
        console.log("rendering될 때, count1, count2 변경시마다 실행된다.");
    }, [count, count2]);

    const addHandler = () => {
        setCount(count + 1);
    };

    const subtractHandler = () => {
        setCount(count - 1);
    };

    const addHandler2 = () => {
        setCount2(count2 + 1);
    };

    const subtractHandler2 = () => {
        setCount2(count2 - 1);
    };

    return (
        <div>
            <h1>함수의 LifeCycle : count: {count} count2: {count2}</h1>
            <button onClick={addHandler}>1 증가</button>
            <button onClick={subtractHandler}>1 감소</button>
            {"  "}
            <button onClick={addHandler2}>count2 1 증가</button>
            <button onClick={subtractHandler2}>count2 1 감소</button>
            <button onClick={changehandler}>시작/중지</button>
            {showYN && <TimerDisplay />}
        </div>
    );
}

export default MyTimer;
