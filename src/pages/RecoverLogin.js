import React from "react";
import {useNavigate} from "react-router-dom";

class RecoverPassword extends React.Component {

    render() {
        return <div>
           <span>Here is where the recover password page will be</span>
        </div>;
    }
}

function WithNavigate(props) {
    let navigate = useNavigate();
    return <RecoverPassword {...props} navigate={navigate}/>
}

export default WithNavigate;
