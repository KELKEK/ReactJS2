import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import DisplayMemberList from './DisplayMemberList';

const initMember = {mid : 1, name : "아무개", age : 10, email : "a@gmail.com"}
const initList = [initMember, {mid:2, name:"삼은정", age:20, email:"b@gmail.com"},
    {mid:3, name:"김유리", age:22, email:"c@gmail.com"}
]

function UseRefTest3(props) {
    const [member, setMember] = useState(initMember);
    const [memberList, setMemberList] = useState(initList);
    
    //DOM을 선택할 때 사용
    const nameInput1 = useRef();// document.getElementById(**)의 역할
    const nameInput2 = useRef();

    //다시 렌더링되어도 초기화되지 않는 변수가 필요하다.
    const memberId = useRef(4); //렌더링 될 때 4로 초기화하지 않음, 처음만 4번
    const clickHandle1 = () =>{
        nameInput1.current.focus();
    };
    const clickHandle2 = () =>{
        nameInput2.current.focus();
    };
    const changeHandler = (e) =>{
        setMember({...member, [e.target.name] : e.target.value})
    }
    const addHandler = (e) =>{
        const newMember = {...member, mid:memberId.current};
        setMember(newMember);
        memberId.current += 1;
        setMemberList([...memberList, member])
    }
    useEffect(()=> {
        console.log(memberList);
    }, [memberList]);
    return (
        <div>
            <input ref={nameInput1}/>
            <input ref={nameInput2}/>
            <Button onClick={clickHandle1}>이동1</Button>
            <Button onClick={clickHandle2}>이동2</Button>
            <hr/>
            이름 : <input name="name" onChange={changeHandler}/>
            나이 : <input name="age" onChange={changeHandler}/>
            이메일 : <input name="email" onChange={changeHandler}/>
            <Button onClick={addHandler}>멤버추가</Button>
            <DisplayMemberList memberList={memberList}/>
            <ul>
                {memberList.map((item, index)=> 
                <li key={index}>
                    {item.mid} - {item.name} - {item.email}
                </li>)}
            </ul>
        </div>
    );
}

export default UseRefTest3;