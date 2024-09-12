import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class StateClassComponent extends Component {
    //rcfc 키워드를 통해 생성하였고, 함수들을 다 지움
    constructor(props) {
        super(props);
        //코드를 작성하려면 반드시 부모를 호출한다.
        console.log("StateClassComponent constructor");
        this.aa = 100;
        this.state={
            count:0,
             message:"count하기",
            f2:()=>{console.log("f2 : state에 있는 화살표 함수", this.state.message);},
            f3:function(){
                console.log("f3 : state에 있는 화살표 함수", this.state.message);
            },
        };
        this.f1 = () => {
            console.log("f1 : constructor 속성으로 만든 함수", this.state.message);
        };
        //state에 있는 선언적함수에 this가 이 객체임을 알린다.
        this.state.f3 = this.state.f3.bind(this);
    }
    f4(){
        console.log("f4 : state밖에 있는 선언적함수", this.state.message);
    }
    f5 = () => {
        console.log("f5 : state밖에 있는 화살표함수", this.state.message);

    }




    clickCountHandler =(e)=>{
        if(e.target.innerHTML === "더하기"){
            this.setState({count:this.state.count+1, message:"더하기(+)"});
        }else{
            this.setState({count:this.state.count-1, message:"빼기(-)"});
        }

    };
    render() {
        const {count, message} = this.state;
        return (
            <div>
                <h1>StateClassComponent!</h1>
                <p>현재 count : {this.state.count}</p>
                <p>현재 count : {count}</p>
                <p>현재 message : {this.state.message}</p>
                <p>현재 message : {message}</p>
                <Button onClick={this.clickCountHandler}>더하기</Button>
                <Button onClick={this.clickCountHandler}>빼기</Button>
                <h2>함수 호출</h2>
                {this.f1()}
                {this.state.f2()}
                {this.state.f3()}
                {this.f4()}
                {this.f5()}
            </div>
        );
    }
}

StateClassComponent.propTypes = {

};

export default StateClassComponent;