import React, { Component } from 'react'

export default class AboutUs extends Component {
    render() {
        return (
            <div className='bio-list'>
                <div className='bio-item'>
                    <p className='name'>Jeff Irvine</p>
                    <img className='photo' src='http://placekitten.com/150/200' />
                    <p className='bio'>Hello my name is Jeff. Hot sauce is my one true love (especially Sriracha). I code all day and sleep all night and live my life to the fullest. Live Laugh Love.</p>
                </div>
                <div className='bio-item'>
                    <p className='name'>Jena Boehm</p>
                    <img className='photo' src='http://placekitten.com/150/200' />
                    <p className='bio'>I am Jena. I code and things. La la la. </p>
                </div>
                <div className='bio-item'>
                    <p className='name'>Katie Jones</p>
                    <img className='photo' src='http://placekitten.com/150/200' />
                    <p className='bio'>I am Katie Jones. The most interesting person in the world. Yip Yip. </p>
                </div>
                <div className='bio-item'>
                    <p className='name'>Rosalie Lee</p>
                    <img className='photo' src='http://placekitten.com/150/200' />
                    <p className='bio'>I am Rosalie and I crush it at everything I do. Try to keep up, I dare you. </p>
                </div>
                <div className='bio-item'>
                    <p className='name'>Sydney James</p>
                    <img className='photo' src='http://placekitten.com/150/200' />
                    <p className='bio'>My name is Sydney aka Wallace's mom aka mom aka Sydney Fieri. Flavortown? Let's go. Hello world</p>
                </div>
            </div>
        )
    }
}
