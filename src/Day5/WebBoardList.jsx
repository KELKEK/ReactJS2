import axios from 'axios';
import { call } from 'login/service/ApiService';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link} from 'react-router-dom';

function WebBoardList(props) {

    const [boardList, setBoardList] = useState([]);
    useEffect(()=>{
        call("http://localhost:9999/api/board/list", "GET", null)
        .then((response)=>{
            setBoardList(response);
        });
    }, []);
 //   useEffect(() => {
 //       //ajax, fetch, primise .... 비동기통신
 //       axios({
 //           url: "http://localhost:9999/api/board/list",
 //           method: "get",
 //       })
 //      .then((response) =>{
 //           console.log(response.data);
 //           setBoardList(response.data);
 //       })
 //       .catch((error)=>{
 //           console.log(error);
 //       });
 //   }, [])
    return (
      <div>
        <h1>BoardList</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Content</th>
              <th>Writer</th>
              <th>Regdate</th>
              <th>Updatedate</th>
            </tr>
          </thead>
          <tbody>
          {boardList.map((board) => (
            <tr key={board.bno}>
              <td><Link to={`/webboard/detail/${board.bno}`}>{board.bno}</Link></td>
              <td>{board.title}</td>
              <td>{board.content}</td>
              <td>{board.writer}</td>
              <td>{board.regdate}</td>
              <td>{board.updatedate}</td>
            </tr>))}
          </tbody>
        </Table>
      </div>
    );
}

export default WebBoardList;