import React, { Component } from 'react'

export default class AboutUs extends Component {
    render() {
        return (
            <div>
            <p className="title">About The Developers</p>
            <div className='bio-list'>
                <div className='bio-item'>
                    <p className='name'>Jeff Irvine</p>
                        <img className='photo' src='./jeff-bio-pic.jpg' width='150px' height='200px' alt='jeff'/>
                    <h4>Software Engineer</h4>
                    <p className='bio'>Hello my name is Jeff. Hot sauce is my one true love. I code all day and sleep all night and live my life to the fullest. Live Laugh Love.</p>
                    <div className='social-links'>
                        <a href="https://www.linkedin.com/in/irvinejeff/">
                            <img border="0" alt="linkedIn" src="linkedin-logo.png" width="30" height="30" />
                        </a>
                        <a href="https://github.com/jeffIrvine/">
                            <img border="0" alt="github" src="github.png" width="30" height="30" />
                        </a>
                    </div>
                </div>
                <div className='bio-item'>
                    <p className='name'>Jena Boehm</p>
                        <img className='photo' src='./jena-bio-pic.jpg' width='150px' height='200px' alt='jena'/>
                    <h4>Software Engineer</h4>
                    <p className='bio'>I am Jena. I love to eat food and get lost in code. La la la. </p>
                        <div className='social-links'>
                            <a href="https://www.linkedin.com/in/jenaboehm/">
                                <img border="0" alt="linkedIn" src="linkedin-logo.png" width="30" height="30" />
                            </a>
                            <a href="https://github.com/jena-boehm">
                                <img border="0" alt="github" src="github.png" width="30" height="30" />
                            </a>
                        </div>
                </div>
                <div className='bio-item'>
                    <p className='name'>Katie Jones</p>
                        <img className='photo' src='http://placekitten.com/150/200' width='150px' height='200px' alt='katie'/>
                    <h4>Software Engineer</h4>
                    <p className='bio'>I am Katie Jones. The most interesting person in the world. Yip Yip. </p>
                        <div className='social-links'>
                            <a href="https://www.linkedin.com/in/katiejonesyo/">
                                <img border="0" alt="linkedIn" src="linkedin-logo.png" width="30" height="30" />
                            </a>
                            <a href="https://github.com/katiejonesyo">
                                <img border="0" alt="github" src="github.png" width="30" height="30" />
                        </a>
                        </div>
                </div>
                <div className='bio-item'>
                    <p className='name'>Rosalie Lee</p>
                        <img className='photo' src='./rosalie-bio-pic.jpeg' width='150px' height='200px' alt='rosalie'/>
                    <h4>Software Engineer</h4>
                    <p className='bio'>Rosalie is a full stack developer and food connoisseur. When she is not eating she is working out, surfing or hiking in effort to later eat what she wants.</p>
                        <div className='social-links'>   
                            <a href="https://www.linkedin.com/in/rosalielee/">
                                <img border="0" alt="linkedIn" src="linkedin-logo.png" width="30" height="30" />
                            </a>
                            <a href="https://github.com/rosalie337">
                                <img border="0" alt="github" src="github.png" width="30" height="30" />
                            </a>
                        </div>
                </div>
                <div className='bio-item'>
                    <p className='name'>Sydney James</p>
                        <img className='photo' src='../sydney-bio-pic.png' width='150px' height='200px' alt='sydney'/>
                    <h4>Software Engineer</h4>
                    <p className='bio'>Sydney is a fullstack Javascript developer and avid home cook. In her spare time she likes to garden, do house projects, and play with her dogs. </p>
                    <div className='social-links'>
                        <a href="https://www.linkedin.com/in/sydjames/">
                            < img border="0" alt="linkedIn" src="linkedin-logo.png" width="30" height="30" />
                        </a>
                        <a href="https://github.com/scjam">
                            <img border="0" alt="github" src="github.png" width="30" height="30" />
                    </a>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
