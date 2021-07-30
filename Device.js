// Device.js
let Device;
try {
  Device = require('expo-device');
} catch {
  // no device available
  console.warn('If it is very important, possibly warn?');
}

export function getBrand() {
  return Device ? Device.brand : 'unknown';
}

// etc..