$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('body').attr('class', thermostat.energyUsage());
  }

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
