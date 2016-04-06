(function () {
    
    var electionEngine = require('./lib/electionEngine');
    
    var HilariousCampaign = {
        'name'      : 'Hilarious Clintface',
        'alignment' : 'True Neutral'
    }
    
    var BernusCampaign = {
        'name'      : 'Bernus Sandus',
        'alignment' : 'Chaotic Good'
    }
    
    var AdolphCampaign = {
        'name'      : 'Adolph Trump',
        'alignment' : 'Chaotic Evil'
    }
    
    electionEngine.addCampaign(HilariousCampaign);
    electionEngine.addCampaign(BernusCampaign);
    electionEngine.addCampaign(AdolphCampaign);

    var votes = [
        
    ];

    // Get votes from API
    // var votes = 

    // Calculate the winner
    electionEngine.doElection();
    
}());