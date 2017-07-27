

window.onload = function() {
const ul = document.getElementById('authors'); // Get the list where we will place our authors
const url = 'https://randomuser.me/api/?results=10'; // Get 10 random users

/* global fetch */
fetch(url)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    let authors = data.results; // Get the results
    return authors.map(function(author) { // Map through the results and for each run the code below
      let li = createNode('li'), //  Create the elements we need
          img = createNode('img'),
          span = createNode('span');
      img.src = author.picture.medium;  // Add the source of the image to be the src of the img element
      span.innerHTML = `${author.name.first} ${author.name.last}`; // Make the HTML of our span to be the first and last name of our author
      append(li, img); // Append all our elements
      append(li, span);
      append(ul, li);
    })
    })
  .catch(function(error) {
    // If there is any error you will catch them here
  });
  
function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}

};


function myRequest(url, tipoRequest) {
  return new Promise((resolve) => {
  var rawData, data;
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      rawData = this.response;
      data = JSON.parse(this.response);
      resolve(data)
    }
  }
  request.send();
  })
}

function misLlamadas() {
  var channel1 = 'castro_1021';
  var channel2 = 'monstercat';
  var channel = channel2;
  var clientId = 'c8a3wkkb56yqjhlcui7tcfyjvs65dy6';
  var url = 'https://api.twitch.tv/kraken/streams/' + channel + '?client_id=' + clientId;
  var tipoRequest = '';

  myRequest(url, tipoRequest).then((data) => {
    console.log(data)
  })
}

misLlamadas();