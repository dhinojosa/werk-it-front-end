import React from "react";
import {Button, Card, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

class Weights extends React.Component {

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
        return (
            <Card>
                <Card.Body>

                    <h3>Create Weight</h3>
                    <Form id={"enter-weight-form"} onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name={"name"} placeholder="Enter Weight Name"
                                          onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="repetition">
                            <Form.Label>Number of Repetitions</Form.Label>
                            <Form.Control type="text" name={"reps"} placeholder="Enter Repetitions"
                                          onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="sets">
                            <Form.Label>Number of Sets</Form.Label>
                            <Form.Control type="text" name={"sets"} placeholder="Enter Sets"
                                          onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="pounds">
                            <Form.Label>Pounds</Form.Label>
                            <Form.Control type="text" name={"pounds"} placeholder="Enter Pounds"
                                          onChange={this.handleChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        );
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

    handleSubmit(event) {
        console.log(this.state)
        console.log(event)
        console.log("Running now");
        try {
            const cookie = getCookie("id");
            let input = process.env.REACT_APP_BACKEND_URL + '/weights/user/' + cookie;
            console.log(input);
            fetch(input, {
                method: "post",
                headers: {
                    'Accept': "application/json",
                    'Content-Type': "application/json"
                },
                body : JSON.stringify(this.state.form)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(">>>Got Data" + data);
                    this.setState({form: data});
                    this.props.navigate("/werk-it/exercises");
                })
                .catch(error => {
                    console.log(error)
                });
        } catch (error) {
            console.log(error)
        }
        event.preventDefault()
    }
}

const getCookie = (name) => {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        return (match[2]);
    } else {
        throw Error("No cookie found")
    }
}

function WithNavigate(props) {
    let navigate = useNavigate();
    return <Weights {...props} navigate={navigate}/>
}
export default WithNavigate;
