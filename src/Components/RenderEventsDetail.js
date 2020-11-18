import React, { Component } from 'react'

export default class RenderEventsDetail extends Component {
    render() {
        return (
            <div>
                {
                    this.props.eventsList.map(event => 
                        <div className='event-detail'>
                            <p className='title'>{event.title}</p>
                            <p className='date'>{event.date}</p>
                            <p className='members'>Members:</p>
                            <p className='recipes'>Recipes:</p>
                        </div>)
                }
            </div>
        )
    }
}
