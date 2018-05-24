import React, { Component } from "react";
import ImageProfile from './ImageProfile'
import ReposList from './ReposList'


export default class UserDetails extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <ImageProfile src={this.props.profile.avatar_url} />
                    <strong>{this.props.profile.name}</strong>
                    <p>{this.props.profile.bio}</p>
                </div>
                <div className="col-md-9">
                    <ReposList repos={this.props.repos} />
                </div>
            </div>
        );
    }
}