import React from "react";
import { Button, Table } from "react-bootstrap";

function TableComponent({ removeHandler, updateHandler, memberList }) {
  const f_update = (e) => {
    const mid = e.target.getAttribute("data-mid");
    updateHandler(mid);
  };

  const f_delete = (e) => {
    const mid = e.target.getAttribute("data-mid");
    console.log(mid);
    removeHandler(mid);
  };

  return (
    <div>
      <h4>Member 목록</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>전화번호</th>
            <th>Active</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {memberList.map((mem) => (
            <tr key={mem.mid}>
              <td>{mem.mid}</td>
              <td>{mem.name}</td>
              <td>{mem.phone}</td>
              <td>
                <input
                  onChange={f_update}
                  checked={mem.active}
                  type="checkbox"
                  data-mid={mem.mid}
                />
              </td>
              <td>
                <Button onClick={f_update} data-mid={mem.mid}>
                  수정
                </Button>{" "}
                {/* 수정 버튼 추가 */}
                <Button onClick={f_delete} data-mid={mem.mid}>
                  삭제
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableComponent;
