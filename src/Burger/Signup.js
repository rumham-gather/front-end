import React, { Component } from 'react'
import request from 'superagent';
import { withRouter } from 'react-router-dom';


export class Signup extends Component {

    state = {
        email: '',
        display_name: '',
        password: '',
        loading: false,
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        this.setState({ loading:true })

        const user = await request
            .post(`${process.env.REACT_APP_BACK_END_URL}/auth/signup`)
            .send(this.state); // we can send state because the keys are the same on the front and back end

        this.setState({ loading: false })
        
        this.props.changeTokenAndUsername(user.body.email, user.body.display_name, user.body.token);

        this.props.history.push('/');

    }
    
    render() {
        return (
            <div>
                <h2>Sign up</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <br/>
                        <input 
                        value={this.state.email}
                        type="email"
                        onChange={(e) => {this.setState({ email: e.target.value })}}
                         />
                    </label>
                    <br/>
                    <label>
                        Display Name:
                        <br/>
                        <input 
                        value={this.state.display_name}
                        type="text"
                        onChange={(e) => {this.setState({ display_name: e.target.value })}}
                         />
                    </label>
                    <br/>
                    <label>
                        Password:
                        <br/>
                        <input 
                        onChange={(e) => {this.setState({ password: e.target.value })}}
                        value={this.state.password} type="password"/>
                    </label>
                    <br/>
                    {
                        this.state.loading 
                        ? 'Simmering'
                        : <button>
                            Sign up!
                        </button>
                    }
                    
                    <p/>
                </form>
            </div>
        )
    }
}

export default withRouter(Signup);