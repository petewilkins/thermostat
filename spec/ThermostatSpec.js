'use strict';

describe('Thermostat', function() {

  var thermostat;
  var temperature;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('defaults', function() {
    it('temperature of 20deg', function() {
      thermostat.currentTemp(0);
      expect(thermostat.temperature).toEqual(20);
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

  it('resets temperature', function(){
    thermostat.resetTemp();
    expect(thermostat.temperature).toEqual(20);
  });

  describe('Power saving on', function(){
    it('has a maximum temperature of 25deg', function() {
      expect(function(){thermostat.up(6);}).toThrowError("Maximum temperature with power saving ON is 25 degrees!");
    });
  });

  describe('Power saving off', function(){
    it('has a maximum temperature of 32deg', function() {
      thermostat.powerSavingOff();
      expect(function(){thermostat.up(13);}).toThrowError("Maximum temperature with power saving OFF is 32 degrees!");
    });
  });

  describe('Energy usage', function(){
    it('is low when below 18deg', function(){
      thermostat.temperature = 17;
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });
    it('is medium when between 18 and 24deg', function(){
      thermostat.temperature = 20;
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });
    it('is high when 25deg or more', function(){
      thermostat.temperature = 26;
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });
  });
});
