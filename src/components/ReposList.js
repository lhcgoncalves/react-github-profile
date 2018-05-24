import React, { Component } from "react";
import { getUserRepos } from './../rest-services/user';

export default class ReposList extends React.Component {

    render() {
        return (
        <ul className="list-group">
            {this.props.repos.map(repo => (
                <li key={repo.id} className="list-group-item">
                    <a href={repo.html_url} target="_blank">{repo.name}</a>
                    <p className="pull-right">
                        <span className="glyphicon glyphicon-star"></span> {repo.stargazers_count}
                    </p>
                </li>
            ))}
        </ul>);
    }
}

