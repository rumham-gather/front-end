import React, { Component } from 'react'
import request from 'superagent';
import { withRouter } from 'react-router-dom';


export class Login extends Component {
    state = {
        email: '',
        display_name: '',
        password: '',
        loading: false,
    }
  
    handleSubmit = async (e) => {
        e.preventDefault();
  
        
        this.setState({ loading:true, err:null })
  
        const user = await request
            .post(`${process.env.REACT_APP_BACK_END_URL}/auth/signin`)
            .send(this.state); // we can send state because the keys are the same on the front and back end
  
        this.setState({ loading: false })
        
        this.props.changeTokenAndUsername(user.body.token, user.body.email, user.body.display_name);
        
        this.props.history.push('/recipes')
    } 
  
    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h2>Log in</h2>
                    Email:
                    <label>
                        <br/>
                        <input 
                        onChange={(e) => this.setState({ email: e.target.value })}
                        value={this.state.email} />
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
                        ? 'Simmering...'
                        :<button>
                            Log in!
                        </button>
                    }
                </form>
            </div>
        )
    }
  }
  
  export default withRouter(Login);
  