import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Componet } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { Personfill, MicFill, CameraVideo, Inboxes, Bell, PersonCircle } from 'react-bootstrap-icons';

function App() {
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

          <div class="top-bar">
            <Container>
              <Navbar.Brand href='/' style={{ color: '#0066FF' }}>LogoImage</Navbar.Brand>
              <Nav className="me-auto">

              </Nav>
              <Nav className="ms-auto">
              </Nav>
            </Container>


          </div>


        </Navbar>
      </div>

      {/* 사이드바 : menu-bar */}
      <div class="menu-bar">
        <div>
          <i class="fas fa-home"></i>
          <span>Dash Board</span>
        </div>
        <div>
          <i class="fa-solid fa-user"></i>
          <span>User Info</span>
        </div>
        <div>
          <i class="fa-solid fa-car"></i>
          <span>Transaction</span>
        </div>
        <div>
          <i class="fa-solid fa-message"></i>
          <span>Marketing</span>
        </div>
      </div>
    </div>
  );
}

export default App;
