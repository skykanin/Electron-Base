import React from "react"
import ReactDOM from "react-dom"
import App from './components/App'

const root = document.getElementById("root");

if (root) {
    ReactDOM.render(<App/>, root);
} else {
    console.log("Cannot retreive root element");
}