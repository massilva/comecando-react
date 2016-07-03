(function () {
    'use strict';

    var React = require('react'),
        UserRepos = React.createClass({
            render: function () {
                var repos = this.props.repos.map(function (repo, key) {
                    return (
                        <div key={key} className="thumbnail">
                            <div className="caption">
                                <h3>{repo.name}
                                    <span className="badge">{repo.stargazers_count} STARTS</span>
                                </h3>
                                <p>{repo.description}</p>
                                <p>
                                    <a href={repo.html_url} className="btn btn-primary" role="button">Repositório</a>
                                    <a href={repo.html_url + '/issues'} className="btn btn-default" role="button">Issues ({repo.open_issues})</a>
                                </p>
                            </div>
                        </div>
                    );
                });
                return (
                    <div>
                        {repos}
                    </div>
                );
            }
        });

    module.exports = UserRepos;
}());
