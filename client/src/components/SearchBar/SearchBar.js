import React from 'react';
import './SearchBar.css';
// Default Bootstrap Component
import Container from 'react-bootstrap/Container';


// SearchBar Component
// Props to be passed via text/string of the namne of a book to be searched for
const SearchBar = props => {

    return (
    <Container>
       <form className="searchForm">
           <div className="form-group">
               <h4>Book Search</h4>
                <label>Search</label>
                <input
                    onChange={props.onChange}
                    type="text" 
                    className="form-control" 
                    placeholder="Search the title of your favorite book..."
                    >
                        
                    </input>
           </div>
           <button
                onClick={props.onClick}
                type="submit" 
                className="btn btn-success searchBtn"
                >Search
            </button>
       </form>
    </Container>
    )
}
        
export default SearchBar;