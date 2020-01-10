import React, { Component } from 'react';
import axios from 'axios';
import AddBtn from '../../components/AddBtn'
import { Row, Col } from '../../components/Grid';
import { List, ListItem } from '../../components/List';
import EmptyList from '../../components/EmptyList'

class Search extends Component {
    state = {
        searchResults: [],
        query: "",
        books: []
    }

    displayResults = data => {
        this.setState({ books: data.items });
    }

    SearchBooks = () => {
        let url = `https://www.googleapis.com/books/v1/volumes?q=${
            this.state.query
            }`;
        axios
            .get(url)
            .then(res => {
                this.displayResults(res.data)
            })
            .catch(err => console.log(err))
    }

    handleInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <Row>
                <Col size="md-12">
                    <div>
                        <input id="bookQ" className="form-control form-control-lg" autoComplete="off" type="text" name="query" onChange={this.handleInput} />
                        <button type="submit" onClick={this.SearchBooks} >
                            Search
                        </button>

                        {(this.state.books && this.state.books.length > 0) ?
                            <List>
                                {this.state.books.map(book => {
                                    return (
                                        <div>
                                            <ListItem
                                                key={book.id}
                                                authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
                                                title={book.volumeInfo.title}
                                                // synopsis={book.value.description ?
                                                //     book.volumeInfo.description : "No Description Available"}
                                                link={book.volumeInfo.infoLink}
                                            />

                                            <AddBtn
                                                authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
                                                title={book.volumeInfo.title}
                                                // synopsis={book.volumeInfo.description ?
                                                    // book.volumeInfo.description : "No Description Available"}
                                                link={book.volumeInfo.infoLink}
                                            />
                                        </div>
                                    )
                                })}
                            </List>
                            :
                            <EmptyList/>
                            }

                    </div>
                </Col>
            </Row>
        )
    }
}
export default Search;