import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
    {/* head section */}
      <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
          <h1 style={{color:"blueviolet",fontSize:"40px"}}>Welcome to <span className='text-warning'>Media-Player</span></h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem natus harum earum nulla? Maxime molestias delectus quia saepe tempora quas architecto, officiis dolores voluptatem repellat perspiciatis odit facere, corporis in?</p>
          <Link style={{textDecoration:"none"}} to={'/home'} className='btn btn-info'>Get Started</Link>
        </Col>
        <Col lg={5}>
        <img src="https://gifdb.com/images/high/listening-to-music-playing-headphones-917xrfcj5ywy343q.gif" alt="" /></Col>
        <Col></Col>
      </Row>

    {/* card section */}
      <div className="container mt-3 mb-5 d-flex flex-column justify-content-center align-items-center  w-100">
        <h2 className="text-center text-danger">Features</h2>
        <div className="card mt-3 mb-5 d-flex flex-row justify-content-between  w-100">
          <Card style={{width:"18rem"}} >
            <Card.Img variant='top' height={"300px"} src='https://cdn-icons-png.freepik.com/512/10072/10072520.png'/>
              <Card.Body className='bg-info'>
                <Card.Title>Managing Videos</Card.Title>
                   <Card.Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </Card.Text>
              </Card.Body>
          </Card>

          <Card style={{width:"18rem"}} >
            <Card.Img variant='top' height={"300px"} src='https://img.freepik.com/premium-vector/social-media-icons-free-download_1043920-166.jpg'/>
              <Card.Body className='bg-info'>
                <Card.Title>Categorized Videos</Card.Title>
                   <Card.Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </Card.Text>
              </Card.Body>
          </Card>

          <Card style={{width:"18rem"}} >
            <Card.Img variant='top' height={"300px"} src='https://cdn-icons-png.freepik.com/512/10221/10221304.png'/>
              <Card.Body className='bg-info'>
                <Card.Title>Watch History</Card.Title>
                   <Card.Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Card.Text>
              </Card.Body>
          </Card>
        </div>
      </div>

    {/* detail section */}
    <div className="m-5">
      <div className="conatiner border border-2 d-flex align-items-center justify-content-center mt-5 p-3">
        <div className="col-lg-5">
          <h4 className="text-warning fw-bolder">Simple,Powerful & Fast</h4>
          <h6 className="m-3"><span className="text-warning fw-bolder">Play Everything</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam possimus eligendi quibusdam cum voluptas unde? Ea, voluptatem. Laboriosam labore, aliquam sequi velit vitae, nihil ipsa natus sed provident mollitia voluptas.</h6>
        
          <h6 className="m-3"><span className="text-warning fw-bolder">Categorize Videos</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam possimus eligendi quibusdam cum voluptas unde? Ea, voluptatem. Laboriosam labore, aliquam sequi velit vitae, nihil ipsa natus sed provident mollitia voluptas.</h6>

          <h6 className="m-3"><span className="text-warning fw-bolder">Managing Videos</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam possimus eligendi quibusdam cum voluptas unde? Ea, voluptatem. Laboriosam labore, aliquam sequi velit vitae, nihil ipsa natus sed provident mollitia voluptas.</h6>
        </div>
        <div className="col-lg-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/AiD6SOOBKZI?si=nH5ulNfCbQsLuP1F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </div>
      </div>
      </div>
    </>
  )
}

export default LandingPage
