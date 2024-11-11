import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <Navbar className="bg-info">
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}}>
          <Navbar.Brand href="" className='text-light fw-bolder'>
            <img
              alt=""
              src="https://cdn.icon-icons.com/icons2/195/PNG/256/Windows_Media_Player_23567.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Media-Player
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
