import React from 'react';
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



function Header() {
    return (
        <>

            <Nav className="justify-content-center" activeKey="/">
                <Nav.Link href="/">Baby's</Nav.Link>
                <Nav.Item>
                    <Nav.Link href="/breakFast">BREAKFAST</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/braunch">BRAUNCH</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/lunch">LUNCH</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/dinner">DINNER</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/login">
                    <Button variant="light">LOG IN</Button>
                    </Nav.Link>
                </Nav.Item>or
                <Nav.Item>
                    <Nav.Link href="/register">
                    <Button variant="success">CREATE ACCOUNT</Button>
                    </Nav.Link>
                </Nav.Item>
                
            </Nav>

        </>
    )
}
export default Header;