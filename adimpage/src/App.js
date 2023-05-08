
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Componet, useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
//import Login from './LoginPage';
import {Link} from 'react-router-dom';



function App() {
  // const navigate = useNavigate();
  const [menu, setMenu] = useState([false, false, false, false]);

  const toggleMenu = (number) => {
    switch (number) {
      case 0:
        setMenu([!menu[0], false, false, false])
        break;
      case 1:
        setMenu([false, !menu[1], false, false])
        break;
      case 2:
        setMenu([false, false, !menu[2], false])
        break;
      case 3:
        setMenu([false, false, false, !menu[3]])
        break;
    }

  }
  return (
    <div className="App">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
      </head>
      {/*상단바 : Navbar */}
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href='/' style={{ color: '#0066FF', marginLeft: '18px' }}>LogoImage</Navbar.Brand>
          <Container>
            <Nav className="me-auto">

            </Nav>
            <Nav className="ms-auto">
              <Link to="/Login">Login</Link>
              {/* <Nav.Link href='/'>Login</Nav.Link> */}
            </Nav>
          </Container>
        </Navbar>
      </div>

      {/* 사이드바 : menu-bar */}
      <div class="menu-bar">
        <div onClick={() => { toggleMenu(0) }} >
          <i class="fas fa-home" />
          <span>Dash Board</span>

          {
            menu[0] === true ? <ul>
              <li>판매기록</li>
              <li>가입유저</li>
            </ul> : null
          }
        </div>

        <div onClick={() => { toggleMenu(1) }}>
          <i class="fa-solid fa-user" />
          <span>User Info</span>

          {
            menu[1] === true ? <ul>
              <li>회원가입</li>
              <li>전체유저</li>
              <li>판매순위</li>
            </ul> : null
          }
        </div>

        <div onClick={() => { toggleMenu(2) }}>
          <i class="fa-solid fa-car" />
          <span>Transaction</span>

          {
            menu[2] === true ? <ul>
              <li>회원검색</li>
              <li>배송등록</li>
              <li>구매알림</li>
            </ul> : null
          }
        </div>
        <div onClick={() => { toggleMenu(3) }}>
          <i class="fa-solid fa-message" />
          <span>Marketing</span>

          {
            menu[3] === true ? <ul>
              <li>회원승인</li>
              <li>사용자관리</li>
            </ul> : null
          }
        </div>
      </div>
    </div>
  );
}

export default App;