import React from "react";
// import "./style.css";
import Thumbnail from '../Thumbnail'
import { Container, Row, Col } from "../Grid"
// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export class ListItem extends React.Component{

  render(){
   console.log(this.props)
;    return (
    <li>
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={this.props.thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{this.props.title}<span><h5>{this.props.authors.join(", ")}</h5></span></h3>
            <p>
              {this.props.synopsis}
            </p>
            <a
              target="_blank"
              href={this.props.link}
              rel="noopener noreferrer"
            >
              Go to book!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
  }
}