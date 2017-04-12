'use strict';

describe('Thermostat', function() {

  var thermostat;
  var temperature;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('defaults', function() {
    it('temperature of 20deg', function() {
      expect(thermostat.currentTemp(0)).toEqual(20);
    });

    it('power saving ON', function() {
      expect(thermostat.powerSaving).toEqual(true)
    });
  });

  it('increases temperature', function() {
    thermostat.up(1);
    expect(thermostat.temperature).toEqual(21);
  });

  it('decreases temperature', function() {
    thermostat.down(-1);
    expect(thermostat.temperature).toEqual(19);
  });

  it('has a minimum temperature of 10deg', function(){
    expect(function(){thermostat.down(-11);}).toThrowError("Minimum temperature is 10 degrees!");
  });

  describe('Power saving on', function(){
    it('has a maximum temperature of 25deg', function() {
      expect(function(){thermostat.up(6);}).toThrowError("Maximum temperature with power saving ON is 25 degrees!");
    });
  });

  describe('Power saving off', function(){
    it('has a maximum temperature of 32deg', function() {
      thermostat.powerSaving = false;
      expect(function(){thermostat.up(13);}).toThrowError("Maximum temperature with power saving OFF is 32 degrees!");
    });
  });
});
