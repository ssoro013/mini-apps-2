import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import axios from 'axios';
import Events from './Events.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            pageCount: 20,
            data: [],
            limit: 20,
            offset: 0,
        }

        this.getEvents = this.getEvents.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    getEvents() {
        axios.get(`http://localhost:3000/events?_page=${this.state.page}&_limit=${this.state.limit}`)
        .then(response => this.setState({
            data: response.data,
            // pageCount: Math.ceil(response.data.length / this.state.limit)
        }))
        .catch(error => console.log(error))
    }

    componentDidMount() {
        this.getEvents();
    }

    handlePageClick() {
        if(this.state.page < pageCount) {
            this.setState({
                page: this.state.page++
            }, () => {
                this.getEvents();
            })
        }
    }

    render() {
        return (
            <div>
                <h1>Historical Events Browser</h1>
                <h2>This is a single page app for rendering </h2>
                <Events events={this.state.data}/>
                <ReactPaginate
                    previousLabel={'previous'}
                    nexLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>
        )
    }

}

export default App;