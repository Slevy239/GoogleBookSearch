import React from 'react';
// import './SearchBtn.css';

const SearchBtn = props => {

    return (
        <button
            onClick={props.onClick}
            className="btn btn-success searchBtn"
        >Search
        </button>
    )
}

export default SearchBtn;