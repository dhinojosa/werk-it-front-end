import React from "react";
import {useNavigate} from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '', lastName: '', email: '', username: '', password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return <div>
            Login
            <form id={"register"} onSubmit={this.handleSubmit}>
                <div><label>First Name <input type={"text"} name={"firstName"} onChange={this.handleChange}/></label>
                </div>
                <div><label>Last Name <input type={"text"} name={"lastName"} onChange={this.handleChange}/></label>
                </div>
                <div><label>Email <input type={"text"} name={"email"} onChange={this.handleChange}/></label></div>
                <div><label>Username <input type={"text"} name={"username"} onChange={this.handleChange}/></label></div>
                <div><label>Password <input type={"password"} name={"password"} onChange={this.handleChange}/></label>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>;
    }

    handleSubmit(event) {
        alert('You logged in with ' + this.state.username + ' and ' + this.state.password);
        console.log(this.state)
        fetch(process.env.REACT_APP_BACKEND_URL +'/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .then(data => {
                this.setState({result: data});
                this.props.navigate("/")
            })
            .catch(error => {
                console.log(error)
            });
        event.preventDefault();
    }


    handleChange(event) {
        const value = event.target.value;
        this.setState({
            ...this.state, [event.target.name]: value
        });
    }
}

function WithNavigate(props) {
    let navigate = useNavigate();
    return <Register {...props} navigate={navigate}/>
}

export default WithNavigate;
