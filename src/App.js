import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function inicio_de_sesion ()
{
  return(
    <>
      <div style = {{textAlign: 'center', borderLeft:'100px solid', borderLeftColor:'#2E64A8', borderRight:'120px solid', borderRightColor:'#c4aa7c'}}>
        <Row style = {{borderLeft:'50px solid', borderLeftColor:'#C42020', textAlign: 'center'}}>
          <Col></Col>
          <Col style = {{textAlign: 'center', width:'50px'}}>
            <img src='https://www.enroll-u.com/_i/2/7/6/8c464a12-a139-11ea-b8a3-0295ecf211ad.png?w=276&h=276&fit=crop&s=276' style = {{width:"50",
              height:"341"}}></img>   
          </Col>
          <Col><br></br></Col>
        </Row>
        <br></br>
      </div> 
      <div style = {{textAlign: 'center', borderLeft:'120px solid', borderLeftColor:'#c4aa7c', borderRight:'100px solid', borderRightColor:'#2E64A8', height:'100%', maxHeight:'900px', height:'auto'}}>
        <br></br>
        <Row style = {{borderRight:'50px solid', borderRightColor:'#C42020', textAlign: 'center'}}>
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
                <p style = {{fontSize:'9px'}}><b>Esta página es exclusivamente para alumnos y/o docentes de la Universidad<br></br> Panamericana 
                Campus Mixcoac</b></p>
              </form>
            </div>
          </Col>
          <Col>
          </Col>
        </Row>
      </div>
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
