import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function inicio_de_sesion ()
{
  return(
    <>
      <Row style = {{textAlign: 'center'}}>
        <Col style = {{textAlign: 'center', width:'50px'}}>
          <img src='https://www.enroll-u.com/_i/2/7/6/8c464a12-a139-11ea-b8a3-0295ecf211ad.png?w=276&h=276&fit=crop&s=276' style = {{width:"50",
          height:"341"}}></img>
        </Col>
      </Row>
      <Row style = {{textAlign: 'center'}}>
        <Col>
        </Col>
        <Col style={{marginTop:'15px'}}>
          <div style = {{borderRadius:'25px', width : '500px', alignContent:'center'}} id={'sombra'}>
            <form>
              <input placeholder='ID' size={'30'} style = {{marginTop:'10px', paddingTop:'10px', backgroundColor:'#f0dcb9'}}></input>
              <br></br>
              <input type = {'password'} placeholder='Constraseña' size = {'30'} style = {{marginTop:'10px', paddingTop:'10px', backgroundColor:'#f0dcb9'}}></input>
              <br></br>
              <input type = {'submit'} value={'Iniciar sesión'} style = {{marginTop:'10px', width:'300px', height:'40px', backgroundColor:'#c4aa7c', color:'white', fontSize:'20px', fontFamily:'bold'}}></input>
              <br></br>
              <a style = {{fontSize:'10px', color:'blue'}}>¿Olvidaste tu contraseña?</a>
              <hr></hr>
              <p style = {{fontSize:'9px'}}><b>Esta página es exclusivament para alunos y/o docentes de la Universidad<br></br> Panamericana 
              Campus Mixcoac</b></p>
            </form>
          </div>
        </Col>
        <Col>
        </Col>
      </Row>
    </>
  );
}

function Landing_Page ()
{
  return(
    <>
    </>
  );
}

function Reservaciones ()
{
  return(
    <>
    </>
  );
}

function App() {
  return (
   inicio_de_sesion()
  );
}

export default App;
