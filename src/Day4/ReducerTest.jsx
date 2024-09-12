import React, { useCallback, useReducer } from 'react';
import { Button } from 'react-bootstrap';

//상태관리를 Component내에서 직접한다 : useState()
//상태관리를 Component 외부에서 한다 : useReducer()

//업무로직(상태값 변경)...외부파일로 저장
function reducer1(state, action){
    switch(action.type){
        case "PLUS" : return state+1;
        case "MINUS" : return state-1;
        default: return state;
    }
} 

function ReducerTest(props) {
   //const [count, setCount] = useState(0);
   const [count, dispatch] = useReducer(reducer1, 0);
    const ClickHandler = useCallback((e) =>{
        if(e.target.innerText === "증가"){
            //setCount(count + 1);
            dispatch({type:"PLUS"});
        }else{
            //setCount(count - 1);
            dispatch({type:"MINUS"});
        }

    //경고창 생기는 것을 막아줌. 다만 바로 위에 있어야하나봄.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count]);
    return (
        <div>
            <h2>현재 count : {count}</h2>
            <Button onClick={ClickHandler}>증가</Button>
            <Button onClick={ClickHandler}>감소</Button>
        </div>
    );
}

export default ReducerTest;