import React, { useState } from "react";
import { useMemo } from "react";


function MemoTest(props){
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };//1.렌더링할때마다 오래걸리는 작업이 수행된다.....
  
  //const calculation = expensiveCalculation(count);
  //2.count가 변경시에만 수행한다.
  const calculation = useMemo(() => expensiveCalculation(count), [count]); //값을 기다리고 있다가 쓰일 때 쓰이도록 한다.
  //해결 : 의존배열값이 변경될 때만 재계산하고 다른 변화에 의해 재 rendering될 때는 기존값을 기억했다가 재사용
  const [myname, setMyname] = useState("");
  const changeHandler = (e) =>{
    console.log(e.target.value);
    setMyname(e.target.value);
  }

  //성능 최적화를 위해 사용하는 3가지
  //useMemo(), React.memo(), useCallback()
  //값저장 : useMemo()
  //컴포넌트 저장 : React.memo()
  //함수 저장 : useCallback()

  
  return (
    <div>
      <div>
        <hr />
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button className="btn btn-danger" onClick={addTodo}>
          Add Todo
        </button>
      </div>
      <div>
        Count: {count}
        <button className="btn btn-success" onClick={increment}>
          +
        </button>
        <input type="text" value={myname} onChange={changeHandler}></input>
        <p>입력한 정보 : {myname}</p>
        <h2>Expensive Calculation: {calculation}</h2> 
      </div>
    </div>
  );
};
export default MemoTest;

