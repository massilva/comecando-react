(function (module) {
    'use strict';
    var React = require('react'),
        SearchUser = require('./SearchUser'),
        GitHub = React.createClass({
            render: function () {
                return (
                    <div className="container">
                        <SearchUser/>
                    </div>
                    );
            }
        });
    module.exports = GitHub;
}(module));
