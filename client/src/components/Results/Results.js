  
import React from 'react';
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
// import './Results.css'

const Results = (props) => {

    return (
        <Container className="card-container">
            <div className="card" id={props.id}>
                <div className="card-header">
                    <img alt={`${props.id}-img`} src={props.image} />
                    {props.title}
                </div>
                <div className="card-body">
                    <h6 className="card-title">Authors: {props.authors}</h6>
                    <h6 className="card-title">Date: {props.date}</h6>
                    <hr></hr>
                    <p className="card-text">{props.description}</p>
                    <div className="buttonsDiv">
                        <button className="btn btn-success viewBtn">
                            <a className="link-text" href={props.link}>
                                View</a>
                        </button>

                        {/* on Save button click, save book to DB */}
                        <button className="btn btn-success saveBtn">
                            <a className="link-text" {...props}>
                                Save</a>
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Results;