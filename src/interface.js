$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#temperature-up-1').click(function(){
    thermostat.up(1);
    $('#temperature').text(thermostat.temperature);
  });
  $('#temperature-up-5').click(function(){
    thermostat.up(5);
    $('#temperature').text(thermostat.temperature);
  });
  $('#temperature-down-1').click(function(){
    thermostat.down(-1);
    $('#temperature').text(thermostat.temperature);
  });
  $('#temperature-down-5').click(function(){
    thermostat.down(-5);
    $('#temperature').text(thermostat.temperature);
  });
});
