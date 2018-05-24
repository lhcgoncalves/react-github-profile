import React, { Component } from "react";
import { getUserInfo, getUserRepos } from './../rest-services/user';
import UserDetails from './UserDetails'

export default class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            profile: '',
            repos: []
        }

        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    changeHandler(ev) {
        this.setState({
            username: ev.target.value
        })
    }

    submitHandler(ev) {
        ev.preventDefault()

        getUserInfo(this.state.username).then(res => {
            this.setState({
                profile: res.data
            })
        })

        getUserRepos(this.state.username).then(res => {
            this.setState({
                repos: res.data
            })
        })
    }

    render() {
        return (
        <div class="container">
            <div className="row">
                <div className="col-md-3">
                    <h1>GitHub profile</h1>
                </div>
                <div className="col-md-9">
                    <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                    <label>Usuário do GitHub</label>
                    <input 
                        type="text"
                        value={this.state.username}
                        onChange={this.changeHandler}
                        className="form-control"
                        />
                    </div>
                    </form>
                </div>
            </div>
            
            <UserDetails profile={this.state.profile} repos={this.state.repos} />
        </div>
        );
    }
}

