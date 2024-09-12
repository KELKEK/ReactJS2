import axios from 'axios';
import { call } from 'login/service/ApiService';
import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup, } from 'react-bootstrap';
import {  Link, useNavigate, useParams } from 'react-router-dom';

function WebBoardDetail(props) {
  const navi = useNavigate();
  const clickHandler1 = () => {
    navi("/webboard/update");
};
const clickHandler2 = () => {
    navi("/webboard/delete");
};
    const {bno} = useParams();
    console.log("파라미터 받기 : " + bno);
    const [board, setBoard] = useState({});
    useEffect(() => {
      call(`http://localhost:9999/api/board/detail/${bno}`, "GET", null)
      .then((response)=>{
        setBoard(response);
      }) 
    }, []);
        //ajax, fetch, primise .... 비동기통신
/*        axios({
            url: `http://localhost:9999/api/board/detail/${bno}`,
            method: "get",
        })
        .then((response) =>{
            console.log(response.data);
            setBoard(response.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    }, []);*/
    return (
      <div>
        <p>WebBoardDetail</p>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">bno</InputGroup.Text>
          <Form.Control name="bno" defaultValue={board.bno} readOnly/>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">title</InputGroup.Text>
          <Form.Control name="title" defaultValue={board.title} readOnly/>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">bno</InputGroup.Text>
          <Form.Control name="content" defaultValue={board.content} readOnly/>
        </InputGroup>

        <Link to="/webboard/update"  state={{board}}>수정하기</Link>
        <Link to="/webboard/delete"  state={{bno:board.bno}}>삭제하기</Link>
        <Button onClick={clickHandler2}>삭제하기</Button>
      </div>
    );
}

export default WebBoardDetail;