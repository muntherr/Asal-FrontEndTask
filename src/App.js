import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/header";
import Footer from "./Components/footer";
import { Route, BrowserRouter } from 'react-router-dom';

// function OurText() {
//   return <p> This is our Text</p>
// }
// Props it our essential way in reat to pass some information
// from one component to another ---> Like arguments.
function createAlert() {
  alert("hello. You clicked me");
}

function ShowMessage(props) {
  if (props.toShow) {
    return <h2>My message</h2>;
  } else {
    return <h2>Forbidden</h2>;
  }
}

function App() {
  return (
    <div className="App">
      <Header info="This is my message" myNumber="6" myalert={createAlert} />
      <p>main content</p>
      <Footer trademark="page by Munther" myalert={createAlert} />
      <ShowMessage toShow={true} />
    </div>
  );
}

export default App;
