import React, { Component } from 'react';
import { Row, Col } from "../../components/Grid";
import { BookList, BookListItem } from "../../components/BookList";
import axios from "axios";
import EmptyList from '../../components/EmptyList';
import RemoveBookBtn from '../../components/RemoveBookBtn';
import { toast } from 'react-toastify';
import API from "../../utils/API";



class Saved extends Component {
  state = {
    books: [],
    initialized: true
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  deleteFromDB = id => {
    console.log(id);

    axios.delete(`/api/books/${id}`)
      .then(() => {
        toast.error('Book Deleted');
        this.getBooks();

      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Row>
          <Col size="md-12">
            {this.state.books.length > 0 ?
              <BookList>
                {this.state.books.map(book => {
                  console.log(book)
                  return (
                    <div>
                      <BookListItem
                        key={book._id}
                        authors={book.authors}
                        title={book.title}
                        synopsis={book.synopsis}
                        link={book.link}
                        thumbnail={book.thumbnail}
                      // delete={()=> this.deleteFromDB(book._id)}
                      />
                      <RemoveBookBtn
                        onClick={() => this.deleteFromDB(book._id)}
                      />
                    </div>
                  )

                })}
              </BookList>
              :
              <EmptyList />
            }
          </Col>
        </Row>
      </div>
    );
  }
}

export default Saved;