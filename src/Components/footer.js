import React, { Component } from "react";
// State is very similar tp the props, but the props are immutable,
// so that means that can't changes
// we use a state to change the state of the component
// The state is the methos to hold our data on the component and handle it

// Router is what we should decide on the page that we currently are reacting to a single page application
// Also to handling the moving between the pages 
class Footer extends Component {
  state = {
    name: "",
    age: 35,
    isLogin: false,
  };

  componentDidMount() {
    this.setState({ name: "Myname" });
  }

  createAlert() {
    alert("hello. You clicked me");
  }

  changed = (evt) => {
    console.log("changed", evt.target.value);
    //   Update the state
    this.setState({ name: evt.target.value });
    // console.log(this.state.name, evt.tareget.value);
  };

  // In the class i want to render a function
    render() {
      const animals =['cat ','dog ','horse ']
    return (
        <div>
            {/* Map function  used to iterate arrays */}
            {animals.map( animal => {
                return (
                    <div key ={animal}>
                        <h1>{animal}</h1>
                        <h1>{animal}</h1>
                    </div>
                );
                     
            })}
        {this.state.isLogin ? (
          <React.Fragment>
            <h2 onClick={this.props.myalert}>{this.props.trademark}</h2>
            <input
              value={this.state.name}
              onChange={this.changed}
              type="text"
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h2>You can't see this content</h2>
            <h2>You must dbe login</h2>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Footer;
