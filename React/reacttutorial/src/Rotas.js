import React from "react";

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  
import Main from "./Pages/Main/Main";
import SobreEmpresa from "./Pages/SobreEmpresa/SobreEmpresa";
import Contato from "./Pages/Contato/Contato";
import CRUD from "./Pages/CRUD/CRUD";



function Rotas(){

return(

    <BrowserRouter>
   <Routes>
    <Route path="/" Component={Main}/>
    <Route path="/Sobre-Empresa" Component={SobreEmpresa}/>
    <Route path="/Contato" Component={Contato}/>
    <Route path="/CRUD" Component={CRUD}/>
    </Routes> 
    </BrowserRouter>


);


};

export default Rotas;

