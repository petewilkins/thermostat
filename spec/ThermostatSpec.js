'use strict';

describe('Thermostat', function() {

  var thermostat;
  var temperature;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20deg', function() {
    expect(thermostat.currentTemp(0)).toEqual(20);
  });

  it('increases temperature', function() {
    thermostat.up(1);
    expect(thermostat.temperature).toEqual(21);
  });

  it('decreases temperature', function() {
    thermostat.down(-1);
    expect(thermostat.temperature).toEqual(19);
  });
});
