'use strict';

// let channels = [
//       "ESL_SC2", 
//       "OgamingSC2", 
//       "cretetion", 
//       "freecodecamp", 
//       "storbeck", 
//       "habathcx", 
//       "RobotCaleb", 
//       "noobs2ninjas"
//     ];
    
let channels = [
      "ESL_SC2"
    ];
    
let clientId = 'c8a3wkkb56yqjhlcui7tcfyjvs65dy6';
const url = 'https://api.twitch.tv/kraken/streams/' + channels[0] + '?client_id=' + clientId;
    
/* global fetch */
fetch(url)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    console.log(data);
    
    })
  .catch(function(error) {
    console.log(error);
  });