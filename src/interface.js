$(document).ready(function() {
  var thermostat = new Thermostat();
  updateVisuals();

  displayWeather('London');

  function updateVisuals() {
    updateTemperature();
    updateSnow();
    updateThermostat(100,thermostat.temperature,false);
  }

  function updateTemperature() {
    var temp = thermostat.temperature
    if(temp < 14){
      $('.progress,.inner-bulb').css({'background-color': '#27ae60'})
    }
    else if(temp < 30){
      $('.progress,.inner-bulb').css({'background-color': '#e67e22'})
    }
    else{
    $('.inner-bulb,.progress').css({'background-color': '#e74c3c'})
    }
  }

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=f46d5930e76b4f86ab4e13175a1e957c';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }

  function updateSnow(){
    if(thermostat.temperature <= 13){
      if(!isItSnowing()) {
        snowStorm.toggleSnow();
      }
    }
    else {
      if(isItSnowing()) {
        snowStorm.toggleSnow();
      }
    }
  }

  function isItSnowing(){
    return snowStorm.active;
  }

  function updateThermostat(){
    thermometer(100,thermostat.temperature,false);
  }

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  $('#temperature').text(thermostat.temperature);

  $('#temperature-up-1').click(function(){
    thermostat.up(1);
    updateVisuals();
  });

  $('#temperature-up-5').click(function(){
    thermostat.up(5);
    updateVisuals();
  });

  $('#temperature-down-1').click(function(){
    thermostat.down(-1);
    updateVisuals();
  });

  $('#temperature-down-5').click(function(){
    thermostat.down(-5);
    updateVisuals();
  });

  $('#temperature-reset').click(function(){
    thermostat.resetTemp();
    updateVisuals();
  });

  $('#powersaving-on').click(function(){
    thermostat.powerSavingOn();
    $('#power-saving-status').text('on')
    updateVisuals();
  });

  $('#powersaving-off').click(function(){
    thermostat.powerSavingOff();
    $('#power-saving-status').text('off')
    updateVisuals();
  })
});
