import React, { Component } from 'react'
import request from 'superagent'
import RenderEventDetail from './RenderEventsDetail.js';

export default class EventsDetail extends Component {
    state = {
        events: []
    }

    componentDidMount = async () => {
        const response = await request.get(`${process.env.REACT_APP_BACK_END_URL}/events/${this.props.match.params.id}`)

        this.setState({ events: response.body })
    }

    render() {
        return (
            <div>
                {/* interesting architecture! so throughout your app, the real meat lives in a separate component, while you manage the fetching and loading logic in this parent. This is called the container comoponent/presentational component pattern! */}
                {
                    this.state.events.length === 0
                    ? <div>Simmering...</div>
                    : <RenderEventDetail eventsList={this.state.events} />
                    }
            </div>
        )
    }
}
