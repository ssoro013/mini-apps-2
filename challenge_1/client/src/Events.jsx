import React from 'react';
import Event from './Event.jsx'

// const Events = (props) => (
//     props.events.slice(0,5).map((event, index) => <Event key={index} event={event}/>)
// )

const Events = (props) => {
    return (
        <div>
            {props.events.map((event, index) => {
                return <Event key={index} event={event} />
            })}
        </div>
    )
}

export default Events;