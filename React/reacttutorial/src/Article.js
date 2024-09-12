import React from "react";
import {
 Card,
 CardBody,
 CardTitle,
 CardSubtitle,CardText,Button,img
  } from 'reactstrap';
class Article extends React.Component{

    render(){
        return(
          <Card
          style={{
            width: '100%',
            alignContent: 'Center',
            alignItems:'Left',
            color: "white",
            backgroundColor: "#1c1e21",
      
          }}
        >
          <img
            alt="Sample"
            width={200}
            style={{
              borderBottomRightRadius: 40,
              borderTopRightRadius:40,
              borderTopLeftRadius:40,
              borderBottomLeftRadius:40,
              height: 200,
              width: 200,
            }}
            src="https://media.licdn.com/dms/image/D4D03AQGerfymzExhVg/profile-displayphoto-shrink_800_800/0/1673658974272?e=1723075200&v=beta&t=0h3AA-94C8Pa37rGnb8YOc2B-hhTNBaS6h0IYK3Smg8"
          />
          <CardBody>
            <CardTitle tag="h5">
             Olá, Sejam bem vindos!!
            </CardTitle>
            <CardSubtitle
              color="white"
              tag="h6"
            >
              Meu nome é Vinícius Souza Silva
            </CardSubtitle>
            <CardText>
              Sou um desenvolvedor com mais de 4 anos de experiência na área, clique abaixo para saber mais. 
            </CardText>
            <Button href="/Sobre-Empresa">
              Saiba mais
            </Button>
          </CardBody>
        </Card>
        );
    }


}

export default Article;