
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Dropdown,
} from 'reactstrap';

/*class Headers extends React.Component{
    render(){

        return (

            <h1>Cabecalho</h1>
        );
    }
    
}*/

function Headers(args) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);
    return (
      <div>
        <Navbar color= '#16181B' dark expand='md'  style={{backgroundSize: "0", backgroundColor: "#16181b"}}>
     <Nav tabs>
      <NavItem>
        <NavLink href="#" active>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/CRUD">CRUD EXEMPLO</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://www.linkedin.com/in/vinisouzasilva/">linkedin</NavLink>
      </NavItem>
      <NavItem>-
        <NavLink href="https://github.com/ViniSouzaSilva">
        GitHub
        </NavLink>
      </NavItem>
    </Nav>
    </Navbar>
      </div>
    );
  }


export default Headers;
