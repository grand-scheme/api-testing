import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/styles.css';

$(document).ready(function() {
  $('#button-id-placeholder').click(function() {
    const VARIABLEPLACEHOLDER = $('#input-placeholder').val();
    $('#input-placeholder').val("");

    let request = new XMLHttpRequest();
    const url = `[THE URL WILL GO HERE... EVENTUALLY`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('.text-one').text(`SOME STUFF GOES HERE... HI.`);
      $('.text-two').text(`SOME STUFF GOES HERE... TOO.`);
      $('.text-THREE').text(`SOME STUFF GOES HERE... maybe.`);
    }
  });
});