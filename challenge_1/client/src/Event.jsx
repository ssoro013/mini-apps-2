import React from 'react';

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div>
                <p>{this.props.event.description}</p>
            </div>
        )
    }
}

export default Event;