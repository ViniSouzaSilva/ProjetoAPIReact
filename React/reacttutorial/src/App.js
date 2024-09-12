import React from 'react';
import Headers from './Headers';
import Article from './Article';
import Footer from './Footer';
import { Button } from 'reactstrap';
import{default as Rotas} from './Rotas';

/*function App() {
  return (
    <div className="App">
   Olá mundo he
    </div>
  );
}*/

class App extends React.Component{
render(){

  return(
    <div>
   
     <Rotas/>
    </div>
  );
}
}
/*<Headers />
     <Article />
     <Footer />
     <Button color="danger">danger</Button>

 function App () {
  return(
    <div>
    <Rotas/>
    </div>
  ); 
};*/


export default App;
