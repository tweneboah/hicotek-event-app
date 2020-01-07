import React, { Component } from "react";
import { connect } from "react-redux";
import testActions from "./testActions";

class Testcomponent extends Component {
    render() {
        console.log(this.props.data);
        return (
            <div>
                <h1>Test Component Redux {this.props.data.data}</h1>

                <button onClick={this.props.testActions}>Increase</button>
            </div>
        );
    }
}

const mapDispatch = {
    testActions
}


const mapStateToprops = (state) => {
    return {
        data: state
    }
}

export default connect(mapStateToprops, mapDispatch)(Testcomponent);