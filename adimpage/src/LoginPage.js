import React, {useState} from 'react';
import './App.css';

function LoginPage() {
    //처음 상태를 빈 문자열로 둬서 빈칸으로 시작함
    //const [상태값 저장 변수, 상태값 갱신 함수] = sueState(상태 초기값);
    const [inputID, setInputID]=useState("");
    const [inputPW, setInputPW]=useState("");

    //input data의 변화가 있을때마다 value 값을 변경해서 useState(동적인 값인 상태를 관리)를 해줌
    //값의 변화, 즉 이벤트 발생시 각 함수의 변수값들을 업데이트 해줌
    const onInputIDHandler = (event) => {
        setInputID(event.target.value)
    }
    const onInputPWHandler = (event) => {
        setInputPW(event.target.value)
    }

    //Login 버튼 클릭 이벤트
    // const onClickLogin = ()=>{
    //     console.log('click login')
    // }

    return (
        //디자인
        <div style={{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center', 
            width: '100%', height: '100vh'
            }}>
            <form style={{ display: 'flex', flexDirection: 'column'}}
                
            >
                <label>ID</label>
                <input type='text' value={inputID} onChange={onInputIDHandler}/>
                <label>Password</label>
                <input type='password' value={inputPW} onChange={onInputPWHandler}/>
                <br />
                <button formAction='' class="button btnFade btnLightBlue">
                    Login
                </button>
            </form>
        </div>
    )


}

export default LoginPage;
