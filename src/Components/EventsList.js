import React, { Component } from 'react'
import request from 'superagent';
import RenderEvents from './RenderEvents.js';

export default class EventsList extends Component {
    state = {
        events: []
    }

    componentDidMount = async () => {
        await this.fetchEvents();
    }

    fetchEvents = async () => {
        const response = await request.get(`https://floating-caverns-16024.herokuapp.com/events`)

        this.setState({ events: response.body })
    }

    render() {
        return (
            <div>
                So many events! Wow so popular
                {
                    this.state.events.length === 0
                    ? <div>Simmering...</div>
                    : <RenderEvents 
                        eventsList={this.state.events} />
                }
            </div>
        )
    }
}
