import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import { Navbar, Nav, InputGroup, FormControl, Form, Container, Offcanvas } from 'react-bootstrap'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
            <div className='nav-display-on-large-screens'>
                {/* <Navbar> */}
                {/* <Nav> */}
                {/* <div style = {{display : 'inline'}}>
                    <Nav className="justify-content-right">
                        <Nav.Item>
                        <Nav.Link>
                            Link1
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link>
                            Link2
                        </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </div>
                    <div style = {{display : 'inline'}}>
                    <Nav className="justify-content-center">
                        <Nav.Item>
                        <Navbar.Brand>
                            Brand
                        </Navbar.Brand>
                        </Nav.Item>
                    </Nav>
                    </div>
                    <div style = {{display : 'inline'}}>
                    <Nav className="justify-content-end">
                        <Nav.Item>
                        <Nav.Link>
                            Link3
                        </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </div> */}
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: '1' }}>
                        <div style={{ paddingTop: '3vh', paddingBottom: '3vh', display: 'flex', justifyContent: 'left' }}>
                            <Nav.Link className='nav'>
                                EN
                            </Nav.Link>
                            <Form className="d-flex">
                                <InputGroup className="mb-3">
                                    <FormControl type="search"
                                        placeholder="Search" aria-label="Search" aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Text id="basic-addon2"><Search style={{ fontSize: '18px' }} /></InputGroup.Text>
                                </InputGroup>
                                {/* <Button variant="outline-success">Search</Button> */}
                            </Form>
                        </div>
                    </div>
                    <div style={{ paddingTop: '1.5vh', flex: '1', display: 'flex', justifyContent: 'center' }}>
                        <Navbar.Brand>
                            <h1 style={{ fontWeight: 'bold' }}>LEO.</h1>
                        </Navbar.Brand>
                    </div>
                    <div style={{ paddingTop: '3vh', paddingBottom: '3vh', paddingRight: '1vw', flex: '1', display: 'flex', justifyContent: 'end' }}>
                        <Nav.Link className='nav'>
                            REGISTER
                        </Nav.Link>
                        <Nav.Link className='nav'>
                            SIGN IN
                        </Nav.Link>
                        <Nav.Link className='nav'>
                            <Link style = {{textDecoration: 'none'}} to='/products'>
                                SHOP
                            </Link>
                        </Nav.Link>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined color="action" />
                        </Badge>
                    </div>
                </div>
            </div>
            {/* </Nav> */}
            {/* </Navbar> */}
            <div className='nav-display-on-small-screens'>
                <Navbar expand={false}>
                    <Container fluid>
                        <Badge badgeContent={4} color="primary" style={{ marginTop: '1vh' }}>
                            <ShoppingCartOutlined color="action" />
                        </Badge>
                        <Navbar.Brand>
                            <h1 style={{ fontWeight: 'bold' }}>LEO.</h1>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel">Anything you want!</Offcanvas.Title>
                            </Offcanvas.Header>
                            <hr className='text-mute'></hr>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link style={{ paddingBottom: '2vh' }}>REGISTER</Nav.Link>
                                    <Nav.Link style={{ paddingBottom: '3vh' }}>SIGN IN</Nav.Link>
                                    <Nav.Link style={{ paddingBottom: '3vh' }}> <Link style = {{textDecoration: 'none'}} to='/products'>
                                        SHOP
                                    </Link></Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <InputGroup className="mb-3">
                                        <FormControl type="search"
                                            placeholder="Search" aria-label="Search" aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Text id="basic-addon2"><Search style={{ fontSize: '18px' }} /></InputGroup.Text>
                                    </InputGroup>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default NavBar
