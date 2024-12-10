import React from "react";
import Leftbar from "../../Leftbar";
import Article from "../../Article";
import Footer from "../../Footer";
import 'rsuite/dist/rsuite.min.css';
import { Container,Sidebar } from 'rsuite';


function Main (){

    
        return(
           
          <Container>
      <Sidebar><Leftbar></Leftbar></Sidebar>
      <Container>
        
        <Article></Article>
        <Footer></Footer>
      </Container>
    </Container>


           
        );
    


};

export default Main;