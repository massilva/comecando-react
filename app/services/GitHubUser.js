(function () {
    'use strict';

    var axios = require('axios'),
        GitHubUser = {
            getByUsername: function (username) {
                return axios.get('https://api.github.com/users/' + username);
            },
            getReposByUsername: function (username) {
                return axios.get('https://api.github.com/users/' + username + '/repos');
            }
        };

    module.exports = GitHubUser;

}());
