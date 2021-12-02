import React from 'react';
import image from '../../image/Shohanur.jpg'
import { Container, Row, Col } from 'react-bootstrap';
const Home = () => {
    return (

<Container>
  <Row className="container mt-5 d-flex text-center ">
    <Col className="w-25 bg-black bg-opacity-50 text-light rounded-3">
    <img src={image} className="card-img-top mt-2 p-3 rounded-3 " alt="..."/>
            <h4>Md.Shohanur Rahman</h4>
            <h6>Full Stack Web Devoloper</h6>
            <div>
            <a className="linkB text-decoration-none fw-bold my-3
            d-block" href="">Home</a>
            <a className="linkB text-decoration-none fw-bold my-3 d-block" href="/ContactMe">contactMe</a>
            <a className="linkB text-decoration-none fw-bold my-3 d-block" href="/mySkills">My Skills</a>
            <a className="linkB text-decoration-none fw-bold my-3 d-block" target="_blank" href="https://drive.google.com/file/d/1aFw5WU5Ka3D1IIyHnnGkPLyiq-uabOCB/view?usp=sharing">Resume</a>
            </div>
    </Col>
    <Col className="mx-2  w-100 rounded-3 text-light bg-black bg-opacity-50">
                <div className=" mt-5 text-lightlogin">
                <h2 className="text-primary">Hello, I'm</h2>
                <h3 className="text-danger">Md.Shohanur Rahaman</h3>
                <p>I'm a Full stack developer. I'm tryin to improve my self day by day.I'm learning web development in 1 years. I dont have job expreance. I have done some projects of my-self </p>
                </div>
                <div>
            
            <a className="linkB text-decoration-none p-4 fw-bold my-3 " href="/aboutme">About Me</a>
            <a className="linkB p-4 text-decoration-none fw-bold my-3 " href="/myProjects">My Projects</a>
            
            </div>
    </Col>
  </Row>
  
</Container>
    );
};

export default Home;