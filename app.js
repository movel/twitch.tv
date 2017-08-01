'use strict';

let channels = [
      "ESL_SC2", 
      "OgamingSC2", 
      "cretetion", 
      "freecodecamp", 
      "storbeck", 
      "habathcx", 
      "RobotCaleb", 
      "noobs2ninjas"
    ];
    
// let channels = [
//       "ESL_SC2"
//     ];
    
let clientId = 'c8a3wkkb56yqjhlcui7tcfyjvs65dy6';
// const url = 'https://api.twitch.tv/kraken/streams/' + channels[0] + '?client_id=' + clientId;
    
function getChannelInfo() {
  channels.forEach(function(channel) {
    function makeURL(type, name) {
      return 'https://api.twitch.tv/kraken/' + type + '/' + name + '?client_id=' + clientId + '?callback=?';
    }
    /* global fetch */
    fetch(makeURL("streams", channel))
      .then((resp) => resp.json()) // Transform the data into json
      .then(function(data) {
      var game,
          status;
      if (data.stream === null) {
        game = 'Offline';
        status = 'offline';
      } else if (data.stream === undefined) {
        game = 'Account Closed';
        status = 'offline';
      } else {
        game = data.stream.game;
        status = 'online';
      }
      fetch(makeURL('channels', channel))
      .then((resp) => resp.json()) // Transform the data into json
      .then(function(data) {
        let logo = data.logo != null ? data.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F",
          name = data.display_name != null ? data.display_name : channel,
          description = status === "online" ? ': ' + data.status : "";
          let html = '<div class="row ' + 
          status + '"><div class="col-xs-2 col-sm-1" id="icon"><img src="' + 
          logo + '" class="logo"></div><div class="col-xs-10 col-sm-3" id="name"><a href="' + 
          data.url + '" target="_blank">' + 
          name + '</a></div><div class="col-xs-10 col-sm-8" id="streaming">'+ 
          game + '<span class="hidden-xs">' + 
          description + '</span></div></div>';
          var el = document.getElementById('display');
          var elChild = document.createElement('div');
          elChild.innerHTML = html;
          status === 'online' ? el.insertBefore(elChild, el.firstChild) : el.appendChild(elChild);
      });
    });
  });
}

function setBodyColor() {
	document.body.style.background = '#CCCC99';
  }

document.addEventListener("DOMContentLoaded", setBodyColor);

window.onload = function() {
  getChannelInfo();
  
  var selector, elems, makeActive;
  selector = '.selector';
  elems = document.querySelectorAll(selector);
  
  makeActive = function () {
      for (var i = 0; i < elems.length; i++) elems[i].classList.remove('active');
      
      this.classList.add('active');
      
      var status = this.id;
      let elements;
      
      if (status === 'all') {
        elements = document.querySelectorAll('.online, .offline');
        for (let i=0; i<elements.length; i++) elements[i].classList.remove('hidden');
      } else if (status === 'online') {
        elements = document.getElementsByClassName('online');
        for (let i=0; i<elements.length; i++) elements[i].classList.remove('hidden');
        elements = document.getElementsByClassName('offline');
        for (let i=0; i<elements.length; i++) elements[i].classList.add('hidden');
      } else {
        elements = document.getElementsByClassName('offline');
        for (let i=0; i<elements.length; i++) elements[i].classList.remove('hidden');
        elements = document.getElementsByClassName('online');
        for (let i=0; i<elements.length; i++) elements[i].classList.add('hidden');
      }
  };
  
  for (var i = 0; i < elems.length; i++)
      elems[i].addEventListener('mousedown', makeActive);

};
  
  
