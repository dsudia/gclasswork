jQuery(document).ready(function () {
  console.log('sanity check');

  $.ajax({
    url: 'http://www.jsonip.com',
    method: "GET",
    success: function(data) {
      $('#ip').text('Tuning in from IP Address: ' + data['ip']);
    }
  });

  $.ajax({
    url: 'http://freegeoip.net/json/',
    method: "GET",
    success: function(data) {
      console.log(data['longitude']);
      $('#long').text('Longitude: ' + data['longitude']);
      $('#lat').text('Latitude: ' + data['latitude']);
      $('#loc').val(data['city']);
    }
  });

  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?q=' + 'Denver' + '&mode=json&units=imperial/',
    method: "GET",
    success: function(data) {
      console.log(data['weather']['main']);
      $('#weatherstat').text(data['main']['temp'] + ' '+ data['weather']['main']);
    }
  });


});