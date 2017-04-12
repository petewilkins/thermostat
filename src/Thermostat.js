'use strict';

function Thermostat() {
  this.temperature = 20;
  this.powerSaving = true;
}

Thermostat.prototype.currentTemp = function(change) {
  return this.temperature += change;
};

Thermostat.prototype.up = function (change) {
  if(this.powerSaving === true && (this.temperature+change) >= 25){
    throw new TypeError("Maximum temperature with power saving ON is 25 degrees!");
  }
  if(this.powerSaving === false && (this.temperature+change) >= 32){
    throw new TypeError("Maximum temperature with power saving OFF is 32 degrees!");
  }
  this.currentTemp(change);
};

Thermostat.prototype.down = function (change) {
  if((this.temperature+change) <= 10) {
    throw new TypeError("Minimum temperature is 10 degrees!")
  }
  this.currentTemp(change);
};
