import React from "react";
import {
 Card,
 CardBody,
 CardTitle,
 CardSubtitle,CardText,Button,img
  } from 'reactstrap';
import { Carousel, Heading, HeadingGroup, Text } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
class Article extends React.Component{

    render(){
        return(
        <div>
           <Carousel className="custom-slider">
           <img src="https://i.ibb.co/f91CX4L/Vin-cius-Silva.png"/>
           </Carousel>

        </div>
        );
    }


}

export default Article;