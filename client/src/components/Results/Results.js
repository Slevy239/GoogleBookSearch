  
import React from 'react';
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
// import './Results.css'



export class Results extends React.Component{

    return (){
        console.log(this.props);
    return(
        <li>
        <Container className="card-container">
            <div className="card" id={this.props.id}>
                {/* <div className="card-header">
                    <img alt={`${props.id}-img`} src={props.image} />
                    {props.title}
                </div> */}
                <div className="card-body">
                    <h6 className="card-title">Authors: {this.props.authors}</h6>
                    <h6 className="card-title">Date: {this.props.date}</h6>
                    <hr></hr>
                    <p className="card-text">{this.props.description}</p>
                    <div className="buttonsDiv">
                        <button className="btn btn-success viewBtn">
                            <a className="link-text" href={this.props.link}>
                                View</a>
                        </button>

                        {/* on Save button click, save book to DB */}
                        <button className="btn btn-success saveBtn">
                            <a className="link-text">
                                Save</a>
                        </button>
                    </div>
                </div>
            </div>
        </Container>
        </li>
    )
}
}
