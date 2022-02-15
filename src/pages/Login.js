import React from "react";
import {useNavigate} from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {},
            errorMessage: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return <div>
            Login
            {this.state.errorMessage && (
                <p className="error"> {this.state.errorMessage} </p>
            )}
            <form id={"login"} onSubmit={this.handleSubmit}>
                <div>
                    <label>User Name <input type={"text"} id={"username"}
                                            name={"username"} onChange={this.handleChange}/></label>

                </div>
                <div>
                    <label htmlFor={"password"}>Password</label>
                    <input type={"password"} id={"password"}
                           name={"password"} onChange={this.handleChange}/>
                </div>
                <input type="submit" value="Submit"/>
                <a href={"/recover-password"}>Recover Password</a>
            </form>
        </div>;
    }

    handleSubmit(event) {
        const username = this.state.form.username
        const password = this.state.form.password
        let url = process.env.REACT_APP_BACKEND_URL + '/login/' + username + "/" + password;
        console.log(url);
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject(response);
            })
            .then((json) => {
                document.cookie = "id=" + json.id + "; SameSite=None; Secure";
                this.props.navigate("/exercises");
            })
            .catch(error => {
                if (error instanceof Response && error.status === 401) {
                    this.setState({errorMessage: "Login Failed"});
                }
                console.log(error)
            });
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({errorMessage: ""});
        const value = event.target.value;
        const name = event.target.name;
        const myForm = this.state.form;
        myForm[name] = value;
        this.setState({
            form: myForm
        });
    }
}

function WithNavigate(props) {
    let navigate = useNavigate();
    return <Login {...props} navigate={navigate}/>
}

export default WithNavigate;
