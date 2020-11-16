import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/styles.css';

$(document).ready(function() {
  $('#button-id-placeholder').click(function() {
    const VARIABLEPLACEHOLDER = $('#input-placeholder').val();
    $('#input-placeholder').val("");

    let request = new XMLHttpRequest();
    const urlRetrieved = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${VARIABLEPLACEHOLDER}&limit=2&offset=0&rating=g&lang=en`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", urlRetrieved, true);
    request.send();

    // function getElements(response) {

    //   $('.text-one').html(`<img src="${response.data[0].images.fixed_height.url}" width="${response.data[0].images.fixed_height.width}" height="${response.data[0].images.fixed_height.height}">`);
    //   // $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`); 
    //   $('.text-two').text(`SOME STUFF GOES HERE... TOO.`);
    //   $('.text-THREE').text(`SOME STUFF GOES HERE... maybe.`);
    // }
  });
});