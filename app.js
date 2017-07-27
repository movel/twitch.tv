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

var userNames = ["freecodecamp", "OgamingSC2", "cretetion", "habathcx", "RobotCaleb","ESL_SC2"];
var urlStreams = "https://wind-bow.gomix.me/twitch-api/streams/";
var urlChannel = "https://wind-bow.gomix.me/twitch-api/channels/";
var game;
var url;
var status;

userNames.forEach(myFunction);

    function myFunction (name) {
     
                        
                    //Fetch Stream details (stream details (game))
                        
                        fetch(urlStreams+name)
                        .then((resp) => resp.json()) 
                        .then(function(data) {
           
                            if (data.stream != null) {
                                status ="Online";
                                game = document.createElement("div");
                                game.innerHTML= name + ' ' + status + ' ' + data.stream.game;
                                document.getElementById("content").appendChild(game);
                            
                            } else {
                                status="Offline"; 
                                game = document.createElement("div");
                                game.innerHTML= name + ' ' + status;
                                document.getElementById("content").appendChild(game);
                                
                            };

                       })

                        .catch(function(error) {
                            console.log(error);
                        })

                        //Fetch channel details (logo and Url)

                       
                        fetch(urlChannel+name)
                        .then((resp2) => resp2.json())
                        .then(function(data2) {
                        
                        
                        var url = document.createElement("div");
                        url.innerHTML='<a href="' + data2.url + '" target="_blank">' + name + '</a>';
                        document.getElementById("content").appendChild(url);

                        var logo = document.createElement("div");
                        logo.innerHTML= '<img src ="'+ data2.logo + '">';
                        document.getElementById("content").appendChild(logo);
                       
                      })
                    


                        .catch(function(error) {
                            console.log(error);
                        })
                        
     }