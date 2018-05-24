import React, { Component } from "react";

export default class ImageProfile extends React.Component {
    render() {
        return (<img src={this.props.src} className="img-responsive img-thumbnail"  />);
    }
}

