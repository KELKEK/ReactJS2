import Button from 'project4/component/Button';
import Editor from 'project4/component/Editor';
import Header from 'project4/component/Header';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Home(props) {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("sort"));
    return (
        <div>
            <Header
            title={"Home"}
            leftchild={<Button
                type="positive"
                text={"긍정 버튼"}
                onClick={() => {
                    alert("positive button");
                }}
            />
            }
            rightchild={
                <Button
                type="negative"
                text={"부정 버튼"}
                onClick={() => {
                    alert("negative button");
                }}
            />
            }
            />
            <Editor 
                onSubmit={() => {
                    alert("작성 완료 버튼을 클릭했음");
                }}
            />
        </div>
    );
}

export default Home;<h1>Home페이지</h1>