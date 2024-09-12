import { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { call } from 'login/service/ApiService';

function WebBoardInsert(props) {
    const [board, setBoard] = useState({
        bno: '',
        title: '',
        content: '',
        mid: '',
        regdate: '',
        updatedate: ''
    });

    useEffect(() => {
        const currentDate = new Date().toISOString(); // 현재 날짜와 시간을 ISO 형식으로 가져옴
        setBoard((prevState) => ({
            ...prevState,
            regdate: currentDate,
            updatedate: currentDate
        }));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBoard((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const insertHandler = () => {
        call("http://localhost:9999/api/board/register", "post", board)
        .then((response) => {
            console.log(response);
            window.location.href = "/webboard/list";
        })
        .catch((error) => {
            console.error("There was an error registering the board!", error);
        });
    };

    return (
      <div>
        <Button onClick={insertHandler}>입력정보 저장하기</Button>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Bno</InputGroup.Text>
          <Form.Control 
            name="bno" 
            value={board.bno}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
          <Form.Control
            name="title"
            value={board.title}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Content</InputGroup.Text>
          <Form.Control
            name="content"
            value={board.content}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Mid</InputGroup.Text>
          <Form.Control 
            name="mid" 
            value={board.mid}
            onChange={handleChange}
          />
        </InputGroup>
        {/* regdate와 updatedate는 입력을 받지 않기 때문에 입력 필드에 표시하지 않음 */}
      </div>
    );
}

export default WebBoardInsert;
