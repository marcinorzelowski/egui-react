import React, {Component} from "react";
import ReactDOM from 'react-dom'
export class FetchData extends Component{
    displayName = FetchData.name;

    constructor(props) {
        super(props);


    }

    componentWillMount() {

        fetch('https://localhost:8080/api/events', {
            method: 'GET',
            body: JSON.stringify(),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(response => {
                console.log(response);
            })
            .catch(error => console.error('Error:', error))
    }

    render() {
        return <h1> Hello</h1>
    }
}
