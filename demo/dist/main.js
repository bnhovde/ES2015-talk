'use strict';

(function () {

    var electionEngine = require('./lib/electionEngine');

    // Query API for candidates
    var candidates = [];

    // Query API for votes
    var votes = [];

    // Create campaigns for candidates
    candidates.map(function (candidate) {
        electionEngine.createCampaign(candidate);
    });

    // Calculate the winner
    electionEngine.doElection();
})();