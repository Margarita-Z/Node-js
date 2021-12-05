import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';



function MyHeader() {
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

                <Navbar.Text>
                    <a href="/myRecipes">MY RECIPES</a>
                </Navbar.Text>
                <Navbar.Text>
                    <i class="bi bi-dot"></i>
                </Navbar.Text>
                <Navbar.Text>
                    <a href="/myProfile">MY PEOFILE</a>
                </Navbar.Text>
                <Navbar.Text>
                    <i class="bi bi-dot"></i>
                </Navbar.Text>
                <Navbar.Text>
                    <a href="/login">LOG OUT</a>
                </Navbar.Text>
            </Nav>

        </>
    )
}
export default MyHeader;