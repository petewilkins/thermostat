'use strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSaving = true;
  this.MINIMUM_TEMPERATURE = -273;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.LOW_USAGE_LIMIT = 18;
  this.HIGH_USAGE_LIMIT = 24;
}

Thermostat.prototype.currentTemp = function(change) {
  this.temperature += change;
};

Thermostat.prototype.up = function (change) {

  this.currentTemp(change);
};

Thermostat.prototype.down = function (change) {
  if((this.temperature+change) < this.MINIMUM_TEMPERATURE) {
    throw new TypeError("Minimum temperature is -273 degrees!")
  }
  this.currentTemp(change);
};

Thermostat.prototype.resetTemp = function () {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function () {
  if(this.temperature < this.LOW_USAGE_LIMIT) {
    return 'low-usage';
  }
  if(this.temperature > this.HIGH_USAGE_LIMIT) {
    return 'high-usage';
  }
  return 'medium-usage';
};

Thermostat.prototype.powerSavingOn = function () {
  this.powerSaving = true;
};

Thermostat.prototype.powerSavingOff = function () {
  this.powerSaving = false;
};
