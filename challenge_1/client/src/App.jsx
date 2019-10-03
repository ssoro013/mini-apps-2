import React from 'react';
import axios from 'axios';
import Events from './Events.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidMount() {
        axios.get('/events?_page=1')
        .then(response => this.setState({
            events: response.data
        }))
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div>
                <h1>Historical Events Browser</h1>
                <h2>This is a single page app for rendering historical events.</h2>
                <Events events={this.state.events} />
            </div>
        )
    }
}

export default App;