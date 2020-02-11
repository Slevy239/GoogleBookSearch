import React, { Component } from "react";
import axios from "axios";
import AddBtn from "../../components/AddBtn";
import { Row, Col } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import EmptyList from "../../components/EmptyList";
import './Search.css'


class Search extends Component {
  state = {
    searchRes: [],
    query: "",
    books: []
  };

  displayRes = data => {
    this.setState({ books: data.items });
  };

  searchGBooks = () => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${
      this.state.query
      }`;
    axios
      .get(url)
      .then(res => {
        //console.log(res);
        this.displayRes(res.data);
      })
      .catch(err => console.log(err));
  };

  handleInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
    //console.log("Query", this.state.query);
  };




  render() {
    return (
      <Row>
        <Col size="md-12">
          <div>
            <input id="bookQ" className="form-control form-control-lg" autoComplete="off" type="text" name="query" onChange={this.handleInput} />
            <div id='submit'>
              <div className="col">

                <button type="submit" className="btn btn-danger" onClick={this.searchGBooks} >
                  Search for Books
          </button>
              </div>
            </div>


            {(this.state.books && this.state.books.length > 0) ?
              <List>
                {this.state.books.map(book => {
                  return (
                    <div id="item">
                      <ListItem
                        key={book.id}
                        authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
                        title={book.volumeInfo.title}
                        synopsis={book.volumeInfo.description ?
                          book.volumeInfo.description : "No Description Available"}
                        link={book.volumeInfo.infoLink}
                        // thumbnail={book.volumeInfo.imageLinks.thumbnail ?
                          // book.volumeInfo.imageLinks.thumbnail : "#"}
                      />

                      <AddBtn
                        authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
                        title={book.volumeInfo.title}
                        synopsis={book.volumeInfo.description ?
                          book.volumeInfo.description : "No Description Available"}
                        link={book.volumeInfo.infoLink}
                        // thumbnail={book.volumeInfo.imageLinks.thumbnail ?
                        //   book.volumeInfo.imageLinks.thumbnail : "#"}

                      />
                    </div>
                  )
                })}
              </List>
              :
              <EmptyList />
            }

          </div>
        </Col>
      </Row>
    );
  }
}

export default Search;