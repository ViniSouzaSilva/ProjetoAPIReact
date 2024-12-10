
import React, { useState } from 'react';

import 'rsuite/dist/rsuite.min.css';

import { Nav, VStack } from 'rsuite';

const Navbar = ({ active, onSelect, ...props }) => {
  return (
    <Nav {...props} activeKey={active} onSelect={onSelect}>
      <Nav.Item  href="/" eventKey="home">Voltar</Nav.Item>
     
    </Nav>
  );
};


function Headers(args) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [active, setActive] = React.useState('home');
    const toggle = () => setDropdownOpen(!dropdownOpen);
    return (
      <div>
    <VStack spacing={30}>
        <Navbar  appearance="pills" active={active} onSelect={setActive} />
    </VStack>
      </div>
    );
  }


export default Headers;
