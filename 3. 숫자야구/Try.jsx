import React, { Component } from 'react';

class Try extends Component {
    render() {
        return (
            <li>
                <div>{this.props.try}</div>
                <div>{this.props.result}</div>
            </li>
        );
    }
}

export default Try;