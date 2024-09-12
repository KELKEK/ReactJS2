import { call } from 'login/service/ApiService';
import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function WebBoardUpdate(props) {
    const location = useLocation();
    const originalBoard = location.state.board;
    console.log(originalBoard);
    const[board, setBoard] = useState(originalBoard);
    const handleChange = (e) =>{
        setBoard({...board, [e.target.name]: e.target.value});
    }
    const saveHandler = () => {
        call("http://localhost:9999/api/board/modify", "put", board)
        .then((response)=>{
            console.log(response);
        });
    }

    return (
      <div>
        <Button onClick={saveHandler}>수정정보 저장하기</Button>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">title</InputGroup.Text>
          <Form.Control name="bno" defaultValue={board.bno} readOnly />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">title</InputGroup.Text>
          <Form.Control name="title" defaultValue={board.title} onChange={handleChange} />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">content</InputGroup.Text>
          <Form.Control name="content" defaultValue={board.content} onChange={handleChange} />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">mid</InputGroup.Text>
          <Form.Control name="mid" defaultValue={board.mid} readOnly/>
        </InputGroup>
      </div>
    );
}

export default WebBoardUpdate;