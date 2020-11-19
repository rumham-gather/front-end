import React, { Component } from 'react'
import request from 'superagent';



export default class Signup extends Component {

    state = {
        email: '',
        display_name: '',
        password: '',
        loading: false,
        err: null
    }

    handleSubmit = async (e) => {
        e.preventDefault();

    

        this.setState({ loading:true })
        try {

             const user = await request
            .post(`${process.env.REACT_APP_BACK_END_URL}/auth/signup`)
            .send(this.state); // we can send state because the keys are the same on the front and back end

        this.setState({ loading: false })
        console.log(user.body);
        this.props.changeTokenAndUsername(user.body.token, user.body.email, user.body.display_name);

        this.props.history.push('/');
        }  catch(err){
            this.setState({ err: 'Oops!'})
        }
    }
    
    render() {
        return (
            <div>
                <h2>Sign up</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    {this.state.err && <div>
                            {this.state.err}
                             </div>}
                        Email:
                        <br/>
                        <input 
                        value={this.state.email}
                        type="email" required
                        onChange={(e) => this.setState({ email: e.target.value })}
                         />
                    </label>
                    <br/>
                    <label>
                    {this.state.err && <div>
                            {this.state.err}
                             </div>}
                        Display Name:
                        <br/>
                        <input 
                        value={this.state.display_name}
                        type="text" required
                        onChange={(e) => this.setState({ display_name: e.target.value })}
                         />
                    </label>
                    <br/>
                    <label>
                        Password:
                        <br/>
                        <input 
                        onChange={(e) => this.setState({ password: e.target.value })}
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
