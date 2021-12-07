import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function Header() {
    return (
        <>
        <Container>
            <Nav className="justify-content-center" activeKey="/">
                <Nav.Link href="/"><h3>Baby's</h3></Nav.Link>
                <Nav.Item>
                    <Nav.Link href="/breakFast">BREAKFAST</Nav.Link>
                </Nav.Item>
                <Navbar.Text>
                    <i class="bi bi-dot"></i>
                </Navbar.Text>
                <Nav.Item>
                    <Nav.Link href="/braunch">BRAUNCH</Nav.Link>
                </Nav.Item>
                <Navbar.Text>
                    <i class="bi bi-dot"></i>
                </Navbar.Text>
                <Nav.Item>
                    <Nav.Link href="/lunch">LUNCH</Nav.Link>
                </Nav.Item>
                <Navbar.Text>
                    <i class="bi bi-dot"></i>
                </Navbar.Text>
                <Nav.Item>
                    <Nav.Link href="/dinner">DINNER</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/login">
                        <Button variant="light">LOG IN</Button>
                    </Nav.Link> 
                </Nav.Item>
                <Navbar.Text>
                    <p>or</p>
                </Navbar.Text>
               <Nav.Item>
                    <Nav.Link href="/register">
                        <Button variant="success">CREATE ACCOUNT</Button>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            </Container>
        </>
    )
}
export default Header;