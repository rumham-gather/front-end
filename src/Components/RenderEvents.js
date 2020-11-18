import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class RenderEvents extends Component {
    state = {
        events: []
    }

    render() {
        return (
            <div>
                {
                    this.props.eventsList.map(event =>
                        <Link to={`/events/${event.id}`}>
                            <div className='event-item'>
                                <p className='title'>{event.title}</p>
                                <p className='date'>{event.date}</p>
                            </div>
                        </Link>)
                }
            </div>
        )
    }
}
