import React from "react";

class Exercises extends React.Component {

    constructor(props) {
        super(props);
        this.state = {result: []};
    }

    render() {
        return (<div name="exercises" className="Exercises">
            <table name="weights">
                <thead>
                <tr>
                    <td>Date</td>
                    <td>Name</td>
                    <td>Sets</td>
                    <td>Reps</td>
                    <td>Weight (in lbs)</td>
                </tr>
                </thead>
                <tbody>
                {this.state.result.map((exercise) => {
                    return (<tr key={exercise.id}>
                        <td>2022-12-12</td>
                        <td>{exercise.name}</td>
                        <td>{exercise.sets}</td>
                        <td>{exercise.reps}</td>
                        <td>{exercise.pounds}</td>
                    </tr>);
                })}
                </tbody>
            </table>
        </div>);
    }


    componentDidMount() {
        try {
            const cookie = getCookie("id");
            let input = process.env.REACT_APP_BACKEND_URL + '/weights/user/' + cookie;

            console.log(input);
            fetch(input)
                .then(response => response.json())
                .then(data => {
                    this.setState({result: data});
                })
                .catch(error => {
                    console.log(error)
                });
        } catch (error) {
            console.log(error)
        }
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
export default Exercises;
