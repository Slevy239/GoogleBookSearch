import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron';
import API from '../../utils/API';
import {Results, ResultsItem } from '../../components/Results/Results';

// Saved Books Page
// Displays results
class Saved extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount = () => {
        this.loadBooks();
    }

    // load books from "/api/books"
    loadBooks = () => {
        API.getBooks()
          .then(res => this.setState({ books: res.data }))
          .catch(err => console.log(err));
      };

    // delete a book from "/api/books/:id" route
    // then reload books from "/api/books"
    deleteBook = (id) => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err))
    }


    render () {
        return (
            <div>
            <Jumbotron />
            {/* Map through books array in state
                    and pass props to results component */}
                {this.state.books.map(book => (
                    <ResultsItem
                        key={book._id}

                        // title={book.volumeInfo.title}
                        // authors={(!book.volumeInfo.authors) ? "No author listed" : book.volumeInfo.authors.join(', ')}
                        // description={(!book.volumeInfo.description) ? "No description available" : book.volumeInfo.description}
                        // link={(!book.volumeInfo.infoLink) ? "No link available" : book.volumeInfo.infoLink}
                        // image={(!book.volumeInfo.imageLinks) ? "No image available" : book.volumeInfo.imageLinks.thumbnail}
                        // date={(!book.volumeInfo.publishedDate) ? "No date available" : book.volumeInfo.publishedDate}
                        // id={book.id}
                    // add an onclick to delete the book from the DB
                    // <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                    >
                       <a href={"/books/" + book._id}>
                           <strong>
                               {book.title} by {book.author}
                           </strong>
                           </a> 
                    </ResultsItem>
                ))}

            </div>
        )
    }
}

export default Saved;