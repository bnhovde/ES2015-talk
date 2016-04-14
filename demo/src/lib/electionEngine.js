// Refactor to use ES6 modules + destructure
var utils = require('../helpers/utils');


    
    
function addCampaign(campaignDetails) {
    
}

    
    
function addWeightings() {
    
}
    
function doElection() {
    console.log( results.winner.name + ' has won the nomination with ' + results.winner.votes + ' votes' );
}


// Refactor to use ES6 object methods
module.exports = {
    addVote: addVote,
    addFunding: addFunding,
    createCampaign: createCampaign,
    doElection: doElection
}