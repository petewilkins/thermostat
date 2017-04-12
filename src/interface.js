$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  displayWeather('London');


  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('body').attr('class', thermostat.energyUsage());
  }

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=f46d5930e76b4f86ab4e13175a1e957c';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }
  
  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  $('#temperature').text(thermostat.temperature);

  $('#temperature-up-1').click(function(){
    thermostat.up(1);
    updateTemperature();
  });

  $('#temperature-up-5').click(function(){
    thermostat.up(5);
    updateTemperature();
  });

  $('#temperature-down-1').click(function(){
    thermostat.down(-1);
    updateTemperature();
  });

  $('#temperature-down-5').click(function(){
    thermostat.down(-5);
    updateTemperature();
  });

  $('#temperature-reset').click(function(){
    thermostat.resetTemp();
    updateTemperature();
  });

  $('#powersaving-on').click(function(){
    thermostat.powerSavingOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  });

  $('#powersaving-off').click(function(){
    thermostat.powerSavingOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  })
});
