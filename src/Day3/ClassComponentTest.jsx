import React, { Component } from 'react';

class ClassComponentTest extends Component {
    constructor(props) { // 오타 수정
        super(props);
        this.state = { message: "", color: "" };
    }

    enterListener = (e) => { // 화살표 함수 문법 오류 수정
        console.log(e.target.innerText);
    };

    leaveListener = (e) => { // 화살표 함수 문법 오류 수정
        console.log(e.target.innerText);
    };

    colorListener = (e) => { // 화살표 함수 문법 오류 수정
        this.setState({
            message: e.target.innerText + " 변경", // 띄어쓰기 추가
            color: e.target.innerText,
        }, () => {
            console.log("set 후 color값 : " + this.state.color);
        });
    };

    render() {
        const myStyle = { color: this.state.color };
        return (
            <div>
                <button onClick={this.enterListener}>입장</button>
                <button onClick={this.leaveListener}>퇴장</button>
                <button onClick={this.colorListener}>BLUE</button>
                <button onClick={this.colorListener}>RED</button>
                <h1 style={myStyle}>{this.state.message}</h1>
                <h1>{this.state.color}</h1>
            </div>
        );
    }
}

export default ClassComponentTest;
