
import React, { useState } from 'react';
import { Sidenav, Nav ,IconButton} from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import 'rsuite/dist/rsuite.min.css';
import { Gear, AddOutline} from '@rsuite/icons';
import Menu from '@rsuite/icons/Menu';
import AddOutlineIcon from '@rsuite/icons/AddOutline';
import PlusIcon from '@rsuite/icons/Plus';
import GithubAltIcon from '@rsuite/icons/legacy/GithubAlt';
import Linkedin from '@rsuite/icons/legacy/Linkedin';

const panelStyles = {
  padding: '15px 20px',
  color: '#3C3F43'
};

const headerStyles = {
  padding: 20,
  fontSize: 16,
  background: '#3C3F43',
  color: ' #fff'
};
/*import {
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
} from 'reactstrap';*/


/*class Headers extends React.Component{
    render(){

        return (

            <h1>Cabecalho</h1>
        );
    }
    
}*/


function Leftbar(args) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [activeKey, setActiveKey] = React.useState('1');
    
    return (
      
        <div style={{ width: 240 }}>
    <Sidenav defaultOpenKeys={['3', '4']} color='#3C3F43'>
      <Sidenav.Header>
        <div style={headerStyles}>
        <IconButton appearance="link" icon={<Menu />}>
        
      </IconButton>
        </div>
      </Sidenav.Header>
      <Sidenav.Body>
        <Nav>
          <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
            Início
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<GroupIcon />}href="/CRUD">
          CRUD EXEMPLO
          </Nav.Item>
          
          <Nav.Menu eventKey="3" title="Sobre Mim" icon={<MagicIcon />}>
            <Nav.Item divider />
            <Nav.Item panel style={panelStyles}>
              Redes Sociais
            </Nav.Item>
            <Nav.Item icon={<Linkedin />}  eventKey="3-1" href="https://www.linkedin.com/in/vinisouzasilva/"> <b>  LinkedIn  </b>    </Nav.Item>
            <Nav.Item icon={<GithubAltIcon />} eventKey="3-2" href="https://github.com/ViniSouzaSilva"><b>  GitHub</b></Nav.Item>
            <Nav.Item divider />
            <Nav.Item panel style={panelStyles} >
              Meus Projetos
            </Nav.Item>
            <Nav.Item eventKey="4-1" href="https://github.com/ViniSouzaSilva/ProjetoAPIReact">Este Projeto!!</Nav.Item>
            <Nav.Item eventKey="4-2" href="https://github.com/ViniSouzaSilva/FerramentaWhatsApp">FerramentaWhatsApp</Nav.Item>
             {/*
            <Nav.Menu eventKey="4-5" title="Custom Action">
              <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
              <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
            </Nav.Menu>*/}
          </Nav.Menu>
          <Nav.Item eventKey="5" icon={<GroupIcon />}href="/IA">
          IA
          </Nav.Item>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  </div>
    );
  }


export default Leftbar;
