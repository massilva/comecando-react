(function () {
    'use strict';

    var React = require('react'),
        UserRepos = require('./UserRepos'),
        UserInfo = React.createClass({
            render: function () {
                var templateUserInfo = this.props.user ? (
                    <div className="row">
                        <div className="col-lg-4">
                            <img className="img-circle" src={this.props.user.avatar_url} alt="avatar" width="140" height="140" />
                            <h2>{this.props.user.login}</h2>
                            <p>{this.props.user.name}</p>
                            <p>Followers: {this.props.user.followers} / Following: {this.props.user.following}</p>
                            <p><a className="btn btn-default" href={this.props.user.html_url} role="button" target="_blank">Mais detalhes</a></p>
                        </div>
                        <div className="col-lg-8">
                            <UserRepos
                                repos={this.props.repos}
                            />
                        </div>
                    </div>
                ) : null;
                return templateUserInfo;
            }
        });

    UserInfo.propTypes = {
        user: React.PropTypes.object,
        repos: React.PropTypes.array
    };

    module.exports = UserInfo;
}());
