'use strict';

function Thermostat() {
  this.temperature = 20;
  this.isPowerSaving = true;
}

Thermostat.prototype.currentTemp = function(change) {
  // return this.tempDefault;
  return this.temperature += change;
};

Thermostat.prototype.up = function (change) {
  if(this.isPowerSaving === true && this.temperature+change >= 25){
    throw new TypeError("Maximum temperature with power saving is 25 degrees!");
  }
  this.currentTemp(change);
};

Thermostat.prototype.down = function (change) {
  if((this.temperature+change) <= 10) {
    throw new TypeError("Minimum temperature is 10 degrees!")
  }
  this.currentTemp(change);
};

Thermostat.prototype.isPowerSaving = function () {

};
