import React from "react";
import { Table } from "reactstrap";
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Progress
} from "reactstrap";
import classnames from "classnames";

class Footer extends React.Component{
  state = {
    tabs: 1
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
  render() {
    return (
      <>
        <div className="nav-wrapper"  style={{ color:"white",backgroundSize: "0", backgroundColor: "#16181b"}}>
          <Nav
            className="nav-fill flex-column flex-md-row"
            id="tabs-icons-text"
            pills
            role="tablist"
            style={{backgroundSize: "0", backgroundColor: "#16181b"}}
          >
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 1}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 1
                })}
                onClick={e => this.toggleNavs(e, "tabs", 1)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-cloud-upload-96 mr-2" />
                Experiência
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 2}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 2
                })}
                onClick={e => this.toggleNavs(e, "tabs", 2)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-bell-55 mr-2" />
                Formação
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={this.state.tabs === 3}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: this.state.tabs === 3
                })}
                onClick={e => this.toggleNavs(e, "tabs", 3)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-calendar-grid-58 mr-2" />
                Redes sociais
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Card className="shadow"  style={{ color: "white", backgroundSize: "0", backgroundColor: "#16181b"}}  >
          <CardBody>
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1" >
                <p className="description">
                  <strong>Desenvolvedor C#</strong>
                </p>
                <p className="description" >
                <ul>
	<li>&nbsp;<strong>Desenvolvedor&nbsp;C#</strong> com mais de 4 anos de experi&ecirc;ncia no desenvolvimento de aplica&ccedil;&otilde;es de software para diferentes empresas e ind&uacute;strias.</li>
	<li>&nbsp;Tenho forma&ccedil;&atilde;o em An&aacute;lise e Desenvolvimento de Sistemas.</li>
	<li>Veja curr&iacute;culo completo <a href="https://www.linkedin.com/in/vinisouzasilva/">Clicando aqui!</a></li>
</ul>

               </p>
                <p>
                <Progress
                   animated
                    className="my-3"
                    value={75}
                    >C#</Progress>
                    <Progress
                   animated
                    className="my-3"
                    value={70}
                    color="danger"
                    >SQL</Progress>
                    <Progress
                   animated
                    className="my-3"
                    value={35}
                    color="success"
                    >Ext JS</Progress>
                    <Progress
                   animated
                    className="my-3"
                    value={25}
                    color="info"
                    >React</Progress>
                    <Progress
                   animated
                    className="my-3"
                    value={30}
                    color="warning"
                    >JavaScript</Progress>
                     <Progress
                   animated
                    className="my-3"
                    value={30}
                    color="Dark"
                   
                    >API</Progress>
                    <Progress
                   animated
                    className="my-3"
                    value={25}
                    >Selenium Drive</Progress>

                </p>
              </TabPane>
              <TabPane tabId="tabs2">
                <p className="description">
                  Cosby sweater eu banh mi, qui irure terry richardson ex
                  squid. Aliquip placeat salvia cillum iphone. Seitan aliquip
                  quis cardigan american apparel, butcher voluptate nisi qui.
                </p>
              </TabPane>
              <TabPane tabId="tabs3">
                <p className="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse. Mustache cliche tempor, williamsburg carles vegan
                  helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                  synth.
                </p>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </>
    );
  }
  }
  
export default Footer;