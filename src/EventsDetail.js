import React, { Component } from 'react'
import request from 'superagent'
import RenderEventDetail from './RenderEventsDetail.js';

export default class EventsDetail extends Component {
    state = {
        events: []
    }

    componentDidMount = async () => {
        const response = await request.get(`https://floating-caverns-16024.herokuapp.com/events/${this.props.match.params.id}`)

        this.setState({ events: response.body })
    }

    render() {
        return (
            <div>
                {
                    this.state.events.length === 0
                    ? <div>Simmering...</div>
                    : <RenderEventDetail eventsList={this.state.events} />
                    }
            </div>
        )
    }
}
