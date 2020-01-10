import React, { Component } from 'react';
import { Row, Col } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import axios from "axios";
import EmptyList from '../../components/EmptyList';
import DeleteBtn from '../../components/DeleteBtn';
import { toast } from 'react-toastify';
import Jumbotron from '../../components/Jumbotron'


class Saved extends Component {
  state = {
    savedBooks: [],
    initialized: true
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    axios.get("/api/books")
      .then(res => {
        this.setState({ savedBooks: res.data })
      })
      .catch((err => console.log(err)))
  }

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
        <Jumbotron
        />
        <Row>
          <Col size="md-12">
            {this.state.savedBooks.length > 0 ?
              <List>
                {this.state.savedBooks.map(book => {
                  console.log(book)
                  return (
                    <div id='item'>
                      <ListItem
                        key={book._id}
                        authors={book.author}
                        title={book.title}
                        synopsis={book.synopsis}
                        link={book.link}
                        thumbnail={book.thumbnail}
                      // delete={()=> this.deleteFromDB(book._id)}
                      />
                      <div className="col"></div>

                        <div className="col">

                          <DeleteBtn
                            onClick={() => this.deleteFromDB(book._id)}
                          />
                        </div>
                      </div>
                      )
    
                    })}
              </List>
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