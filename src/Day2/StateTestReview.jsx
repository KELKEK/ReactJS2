import React, { useState } from 'react';
import { Accordion, Button, Card, Col, Form, InputGroup, ListGroup, Row } from 'react-bootstrap';

function StateTestReview(props) {
    const [member, setMember] = useState({ name: "아무개", age: 30 });
    const [memberList, setMemberList] = useState([{ name: "아무개", age: 30 }]);
    const {memberrList} = props;
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
            <Button variant="primary" onClick={addMemberHandler}>
              멤버추가
            </Button>
            <StateTestReview memberList={memberrList} />
            <hr />
            <Row>
              {memberList.map((item, index) => (
                <Col key={index} xs={12} md={6} lg={4} className="mb-3">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Accordion Item #1</Accordion.Header>
                      <Accordion.Body>
                        {index}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Accordion Item #2</Accordion.Header>
                      <Accordion.Body>
                        {item.name}
                      </Accordion.Body>
                      <Accordion.Body>
                        {item.age}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              ))}
            </Row>
          </div>
        );
}

export default StateTestReview;