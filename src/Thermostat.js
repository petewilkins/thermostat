'use strict';

function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.currentTemp = function(change) {
  // return this.tempDefault;
  return this.temperature += change;
};

Thermostat.prototype.up = function (change) {
  this.currentTemp(change);
};

Thermostat.prototype.down = function (change) {
  this.currentTemp(change);
};
