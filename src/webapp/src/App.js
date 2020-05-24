import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import {FetchData} from "./components/fetchData";

export default class App extends Component {
  displayName = App.name;

    componentWillMount() {

        fetch('http://localhost:8080/api/events', {
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
    return (
        <h1>Hello</h1>
    );
  }
}
