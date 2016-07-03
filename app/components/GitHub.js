(function (module) {
    'use strict';
    var React = require('react'),
        SearchUser = require('./SearchUser'),
        GitHub = React.createClass({
            getInitalState: function () {
                return {
                    user: null,
                    repos: []
                };
            },
            updateUser: function (user) {
                this.setState({user: user});
            },
            updateRepos: function (repos) {
                this.setState({repos: repos});
            },
            render: function () {
                return (
                    <div className="container">
                        <SearchUser
                            updateUser={this.updateUser}
                            updateRepos={this.updateRepos}
                        />
                    </div>
                    );
            }
        });
    module.exports = GitHub;
}(module));
