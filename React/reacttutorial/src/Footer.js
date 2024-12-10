import React from "react";

import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import 'rsuite/dist/rsuite.min.css';
import GithubAltIcon from '@rsuite/icons/legacy/GithubAlt';
import { Progress ,Highlight,Heading, HeadingGroup,Text,Divider,IconButton} from 'rsuite';
import { Icon } from '@rsuite/icons';


const CSharp = React.forwardRef((props, ref) => (
  <svg
  viewBox="0 0 24 24"
  backgroundColor='#16181b'
  height="1em"
  width="1em"
  {...props}
>
  <path d="M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zM9.426 7.12a5.55 5.55 0 011.985.38v1.181a4.5 4.5 0 00-2.25-.566 3.439 3.439 0 00-2.625 1.087 4.099 4.099 0 00-1.012 2.906 3.9 3.9 0 00.945 2.754 3.217 3.217 0 002.482 1.023 4.657 4.657 0 002.464-.634l-.004 1.08a5.543 5.543 0 01-2.625.555 4.211 4.211 0 01-3.228-1.297 4.793 4.793 0 01-1.212-3.409 5.021 5.021 0 011.365-3.663 4.631 4.631 0 013.473-1.392 5.55 5.55 0 01.12-.004 5.55 5.55 0 01.122 0zm5.863.155h.836l-.555 2.652h1.661l.567-2.652h.81l-.555 2.652 1.732-.004-.15.697H17.91l-.412 1.98h1.852l-.176.698h-1.816l-.58 2.625h-.83l.567-2.625h-1.65l-.555 2.625h-.81l.555-2.625h-1.74l.131-.698h1.748l.401-1.976h-1.826l.138-.697h1.826zm.142 3.345L15 12.6h1.673l.423-1.98z" />
</svg>
));


const SQL = React.forwardRef((props, ref) => (
<svg
viewBox="0 0 448 512"
fill="currentColor"
height="1em"
width="1em"
{...props}
>
<path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0s224 35.8 224 80zm-54.8 134.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432v-85.9z" />
</svg>
));


const UnitTest = React.forwardRef((props, ref) => (
  <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M13.293 2.707l.818.818L3.318 14.318C2.468 15.168 2 16.298 2 17.5s.468 2.332 1.318 3.183C4.169 21.532 5.299 22 6.5 22s2.331-.468 3.182-1.318L20.475 9.889l.818.818 1.414-1.414-8-8-1.414 1.414zm3.182 8.354l-2.403-2.404-1.414 1.414 2.403 2.404-1.414 1.415-.99-.99-1.414 1.414.99.99-1.415 1.415-2.403-2.404L7 15.728l2.403 2.404-1.136 1.136c-.945.944-2.59.944-3.535 0C4.26 18.795 4 18.168 4 17.5s.26-1.295.732-1.768L15.525 4.939l3.535 3.535-2.585 2.587z" />
    </svg>
  ));

  
const react = React.forwardRef((props, ref) => (
  <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M13.785 11.245 A1.785 1.785 0 0 1 12 13.03 A1.785 1.785 0 0 1 10.215 11.245 A1.785 1.785 0 0 1 13.785 11.245 z" />
      <path d="M7.002 14.794l-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 001.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 01-.985-2.542zm10.572 6.095l-.11-.392a19.628 19.628 0 00-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 01-.987 2.542z" />
      <path d="M6.419 8.695l-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 00-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 00-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 011.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 002.021-2.477l.112-.16.194-.019a19.473 19.473 0 003.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 01-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 01-1.71 2.124z" />
      <path d="M17.58 8.695l-.395-.099a19.477 19.477 0 00-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0011.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 01-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 01-1.713-2.123 20.692 20.692 0 01-2.696-.419z" />
      <path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 01-1.126-1.769 26.028 26.028 0 01-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 014.198 0l.194.019.113.16a25.136 25.136 0 012.1 3.628l.083.179-.083.177a24.742 24.742 0 01-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 001.832-3.168 23.916 23.916 0 00-1.832-3.168 23.877 23.877 0 00-3.667 0 23.743 23.743 0 00-1.832 3.168 24.82 24.82 0 001.832 3.168z" />
    </svg>
  ));
  const api = React.forwardRef((props, ref) => (
    <svg
    viewBox="0 0 1024 1024"
    fill="currentColor"
    height="1em"
    width="1em"
    {...props}
  >
    <path d="M917.7 148.8l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-76.1 76.1a199.27 199.27 0 00-112.1-34.3c-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7a8.03 8.03 0 000 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3 2 0 4.1-.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM578.9 546.7a8.03 8.03 0 00-11.3 0L501 613.3 410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6a8.03 8.03 0 00-11.3 0L363 475.3l-43-43a7.85 7.85 0 00-5.7-2.3c-2 0-4.1.8-5.7 2.3L206.8 534.2c-68.9 68.9-77 175.7-24.3 253.5l-76.1 76.1a8.03 8.03 0 000 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3 51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43 66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2z" />
  </svg>
    ));

    const sencha = React.forwardRef((props, ref) => (
      <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M15.287 24c.458-1.221.917-1.532.917-2.442 0-1.452-.878-2.8-2.237-3.434l-5.831-2.813C5.211 13.85 3.392 10.97 3.392 7.797c0-3.23 1.867-6.133 4.871-7.576L8.712 0a3.723 3.723 0 00-.916 2.44c0 1.453.878 2.801 2.237 3.435l5.831 2.813c2.926 1.462 4.744 4.342 4.744 7.514 0 3.23-1.867 6.133-4.871 7.577l-.45.221" />
    </svg>
      ));

      
    const javascript = React.forwardRef((props, ref) => (
      <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z" />
    </svg>
        ));

     const selenium = React.forwardRef((props, ref) => (
      <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M23.174 3.468l-7.416 8.322a.228.228 0 01-.33 0l-3.786-3.9a.228.228 0 010-.282L12.872 6a.228.228 0 01.366 0l2.106 2.346a.228.228 0 00.342 0l5.94-8.094A.162.162 0 0021.5 0H.716a.174.174 0 00-.174.174v23.652A.174.174 0 00.716 24h22.566a.174.174 0 00.174-.174V3.6a.162.162 0 00-.282-.132zM6.932 21.366a5.706 5.706 0 01-4.05-1.44.222.222 0 010-.288l.882-1.236a.222.222 0 01.33-.036 4.338 4.338 0 002.964 1.158c1.158 0 1.722-.534 1.722-1.098 0-1.752-5.7-.552-5.7-4.278 0-1.65 1.428-3 3.756-3a5.568 5.568 0 013.708 1.242.222.222 0 010 .3l-.906 1.2a.222.222 0 01-.318.036 4.29 4.29 0 00-2.706-.936c-.906 0-1.41.402-1.41.996 0 1.572 5.688.522 5.688 4.2.006 1.812-1.284 3.18-3.96 3.18zm12.438-3.432a.192.192 0 01-.192.192h-5.202a.06.06 0 00-.06.066 1.986 1.986 0 002.106 1.638 3.264 3.264 0 001.8-.6.192.192 0 01.276.042l.636.93a.198.198 0 01-.042.264 4.71 4.71 0 01-2.892.9 3.726 3.726 0 01-3.93-3.87 3.744 3.744 0 013.81-3.852c2.196 0 3.684 1.644 3.684 4.05zm-3.684-2.748a1.758 1.758 0 00-1.8 1.56.06.06 0 00.06.066h3.492a.06.06 0 00.06-.066 1.698 1.698 0 00-1.812-1.56z" />
    </svg>
            ));     

    const wpf = React.forwardRef((props, ref) => (
      <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M6.391 1.537a.785.785 0 00-.679.392L.106 11.607a.785.785 0 000 .786l5.606 9.678a.785.785 0 00.68.392h11.217c.28 0 .538-.15.679-.392l5.606-9.678a.785.785 0 000-.786l-5.606-9.678a.785.785 0 00-.68-.392zm.03.837h10.542l-5.209 9.211H5.968l4.72-8.174a.13.13 0 00-.114-.196l-3.068-.002a.262.262 0 00-.226.13l-4.764 8.243h-1.43zm11.333.303l5.4 9.323-5.371 9.274-5.299-9.279zm.171 2.825a.13.13 0 00-.113.066l-1.519 2.69a.262.262 0 00.002.259l1.943 3.36a.262.262 0 010 .262l-1.927 3.338a.262.262 0 000 .26l1.526 2.675a.13.13 0 00.227 0l3.55-6.143a.523.523 0 000-.524L18.04 5.567a.13.13 0 00-.114-.065zM1.09 12.422h1.436l4.764 8.232a.262.262 0 00.226.13l3.072.002a.13.13 0 00.113-.196L5.98 12.422h5.784l5.256 9.204H6.421z" />
    </svg>
                    ));    
const style = {
  width: 120,
  display: 'inline-block',
  marginRight: 10
};


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
                SoftSkills
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Card className="shadow"  style={{ color: "white", backgroundSize: "0", backgroundColor: "#16181b"}}  >
          <CardBody>
            <TabContent activeTab={"tabs" + this.state.tabs}>
              <TabPane tabId="tabs1" >
                
                
                <ul>
                <Highlight
                  query={['Você verá o curr&iacute;culo completo!!', 'high performance']}
                  renderMark={(match, index) => (
                    <mark key={index} style={{ backgroundColor: '#16181b', color: '#f00' }}>
                      {match}
                    </mark>
                  )}
                >
                 Você verá o curr&iacute;culo completo abaixo ↓
                </Highlight>
                
                
                
                  <a href="https://i.ibb.co/h2vVQyY/CV-Vin-cius-Souza-PT-V2.jpg"><Highlight query="Clicando aqui!" >Clicando aqui!</Highlight></a>

                     
                </ul>
                
               
                <p>
               
                    <div style={style}>
                    <IconButton appearance="link" icon={<GithubAltIcon />}/>
                      GitHub
                      <Progress.Circle gapPosition="right" percent={95} strokeColor="#77dd77" showInfo={false} trailColor="#1c1e21" ><b>C#</b></Progress.Circle>
                    </div>
                    <Divider vertical />
                    <div style={style}>
                    <IconButton appearance="link" backgroundColor='#16181b' icon={<Icon as={CSharp} style={{  backgroundColor:'#16181b',  color: 'blueviolet' }} />} />
                      C#
                      <Progress.Circle gapPosition="right" percent={85} strokeColor="#77dd77" showInfo={false} trailColor="#1c1e21" ><b>C#</b></Progress.Circle>
                    </div>
                    <Divider vertical />
                    <div style={style}>
                    <IconButton appearance="link" backgroundColor='#16181b' icon={<Icon as={SQL} style={{  backgroundColor:'#16181b',  color: 'white' }} />} />
                      SQL
                      <Progress.Circle gapPosition="right" percent={85} strokeColor="#77dd77" showInfo={false} trailColor="#1c1e21" />
                    </div>
                    <Divider vertical />
                    <div style={style}>
                    <IconButton appearance="link" backgroundColor='#16181b' icon={<Icon as={UnitTest} style={{  backgroundColor:'#16181b',  color: 'green' }} />} />
                      Unit Test
                      <Progress.Circle gapPosition="right" percent={75} strokeColor="#77dd77" showInfo={false} trailColor="#1c1e21" />
                    </div>
                    <Divider vertical />
                    <div style={style}>
                    <IconButton appearance="link" backgroundColor='#16181b' icon={<Icon as={react} style={{  backgroundColor:'#16181b',  color: 'cyan' }} />} />
                      React
                      <Progress.Circle  gapPosition="bottom" percent={50} strokeColor="#ffdd0f" showInfo={false} trailColor="#1c1e21" />
                    </div>
                    <Divider vertical />
                    <div style={style}>
                    <IconButton appearance="link" backgroundColor='#16181b' icon={<Icon as={api} style={{  backgroundColor:'#16181b',  color: 'gray' }} />} />
                      API
                      <Progress.Circle gapPosition="bottom" percent={50} strokeColor="#ffdd0f" showInfo={false}  trailColor="#1c1e21" />
                    </div> 
                    <Divider vertical />
                    <div style={style}>
                    <IconButton appearance="link" backgroundColor='#16181b' icon={<Icon as={sencha} style={{  backgroundColor:'#16181b',  color: 'greenyellow' }} />} />
                      Ext JS
                      <Progress.Circle gapPosition="bottom" percent={40} strokeColor="#ffdd0f" showInfo={false}  trailColor="#1c1e21" />
                    </div>
                    <Divider vertical />
                    <div style={style}>
                    <IconButton appearance="link" backgroundColor='#16181b' icon={<Icon as={javascript} style={{  backgroundColor:'#16181b',  color: 'blue' }} />} />
                      JavaScript
                      <Progress.Circle  gapPosition="bottom" percent={40} strokeColor="#ffdd0f" showInfo={false}  trailColor="#1c1e21" />
                    </div>    
                    <Divider vertical />           
                    <div style={style}>
                    <IconButton appearance="link" backgroundColor='#16181b' icon={<Icon as={selenium} style={{  backgroundColor:'#16181b',  color: 'blue' }} />} />
                      Selenium
                      <Progress.Circle gapPosition="bottom" percent={35} showInfo={false}  trailColor="#1c1e21" />
                    </div>
                    <Divider vertical />
                    <div style={style}>
                    <IconButton appearance="link" backgroundColor='#16181b' icon={<Icon as={wpf} style={{  backgroundColor:'#16181b',  color: 'cy|\\an' }} />} />
                      WPF 
                      <Progress.Circle gapPosition="bottom" percent={35} showInfo={false}  trailColor="#1c1e21" />
                    </div>
                </p>
              </TabPane>
              <TabPane tabId="tabs2">
                <p className="description">
                <HeadingGroup>
                   <>
                   <Heading align="center" level={1}>Graduações</Heading>  
                   <Divider/>       
                      
                    </>
                     <Heading>UNIVERSIDADE PAULISTA</Heading>
                     <b>2017 - 2019</b>
                     <Highlight query={[ 'Tecnólogo , Analise e Desenvolvimento de Sistemas']}>
                     Tecnólogo , Analise e Desenvolvimento de Sistemas
                      </Highlight>
                     
                     <b>Durante o período do curso, aprendi sobre lógica de programação e fui introduzido a linguagem C. Desenvolvemos um sistema de chamados baseado nos diagramas de orientação a objetos.</b>
                    <br/>     
                    <br/>   
                    <br/>   
                    <br/>   
                                       
                       <Heading>ETEC - Escola Técnica Estadual de São Paulo</Heading>
                       <b>2015 - 2016</b>
                       <Highlight query={[ 'Tecnico em redes de computadores, Redes de computadores']}>
                       Tecnico em redes de computadores, Redes de computadores 
                        </Highlight>
                       
                       <b>Durante o período do curso, aprendi sobre projetar, instalar, configurar e manter redes de comunicação.</b>
                       <b>O curso abrange fundamentos de redes, como protocolos, roteamento, endereçamento IP, cabeamento estruturado e redes sem fio, além de tópicos mais avançados, como virtualização, gerenciamento de servidores e soluções em nuvem.</b>

                       <Divider/> 
                       <Heading align="center" level={3}>Certificados</Heading>  

                       <Divider/> 
                       <Heading> C# COMPLETO Programação Orientada a Objetos </Heading>
                       <l><b>Data de conclusão : </b> Novembro 2024</l> 
                       <br></br>
                        
                       <b>Certificado  ↓</b>
                       <a href="https://www.udemy.com/certificate/UC-07f21191-1d67-4fad-b4c0-919b8342fc1e/"><Highlight query="Clicando aqui!" >Clicando aqui!</Highlight></a>

                       <b>O curso abrange desde os principios da linguagem C# e lógica de programação.<br></br> gradualmente avançando, até alcançar tópicos aprofundados tais como interfaces, polimorfismo, princípios SOLID, padrões de projeto, generics, expressões lambda, delegates, LINQ e etc.</b>
                       <br/>     
                       <br/>   
                       <br/>   
                       <br/>  
                       
                       
                       <Heading> Curso de ASP NET C# com MVC 5 </Heading>
                       <l><b>Data de conclusão : </b> outubro 2019</l> 
                       <br></br>
                        
                       <b>Certificado  ↓</b>
                       <a href="https://www.udemy.com/certificate/UC-TWPRFTHZ/"><Highlight query="Clicando aqui!" >Clicando aqui!</Highlight></a>

                       <b>O curso é focado nos fundamentos da estrutura MVC 5  para desenvolver sistemas web e sites com ASP NET C#.<br></br></b>
                       
                       
                       <Divider/> 
                </HeadingGroup>
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