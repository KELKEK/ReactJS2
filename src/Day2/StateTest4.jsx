import React, { useState } from 'react';
import { Button, Form, InputGroup, Card, Row, Col, ListGroup } from 'react-bootstrap';

function StateTest4(props) {
    const [member, setMember] = useState({ name: "아무개", age: 30 });
    const [memberList, setMemberList] = useState([{ name: "아무개", age: 30 }]);

    const onMemberChangeHandler = (e) => {
        console.log(e.target.name, e.target.value);
        var newMember = { ...member, [e.target.name]: e.target.value };
        setMember(newMember); // 비동기 처리됨
        console.log("setMember 비동기 처리되기 때문에 setting하고 출력이 아님", member);
    };

    const addMemberHandler = () => {
        setMemberList([...memberList, member]);
        setMember({ name: "", age: "" }); // 입력 필드 초기화
    };

    const removeMemberHandler = (index) => {
        const newMemberList = memberList.filter((_, i) => i !== index);
        setMemberList(newMemberList);
    };

    return (
        <div>
            <h1>이름과 나이를 입력하세요</h1>
            <p>이름 : {member.name} </p>
            <p>나이 : {member.age} </p>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">이름</InputGroup.Text>
                <Form.Control
                    name="name"
                    value={member.name}
                    onChange={onMemberChangeHandler}
                    aria-label="name"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">나이</InputGroup.Text>
                <Form.Control
                    name="age"
                    value={member.age}
                    onChange={onMemberChangeHandler}
                    aria-label="age"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <Button variant="primary" onClick={addMemberHandler}>멤버추가</Button>
            <hr />
            <Row>
                {memberList.map((item, index) => (
                    <Col key={index} xs={12} md={6} lg={4} className="mb-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    나이: {item.age}
                                </Card.Text>
                                <Button variant="danger" onClick={() => removeMemberHandler(index)}>삭제</Button>
                            </Card.Body>
                            <ListGroup variant="flush">
                            <ListGroup.Item>{index}</ListGroup.Item>
                            <ListGroup.Item>{item.name}</ListGroup.Item>
                            <ListGroup.Item>{item.age}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>

                ))}
            </Row>
        </div>
    );
}

export default StateTest4;
