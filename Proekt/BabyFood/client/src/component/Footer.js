import React from 'react';
import { Nav } from 'react-bootstrap';
//import Image from 'react-bootstrap/Image';


function Footer() {
    return (
        <>
        
  <Nav className="justify-content-center" activeKey="/">
  <h2>Baby's</h2>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>BREACFAST</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>BRAUNCH</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>LUNCH</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>DINNER</Nav.Link>
    </Nav.Item>
    <h6>Baby's Food Place copyright 2021</h6>
    
    </Nav>
</>
    )
}
export default Footer;