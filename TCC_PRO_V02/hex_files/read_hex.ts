import fs from 'fs';

const I2_O6 = fs.readFileSync('I2_O6.hex');
const I3_O6 = fs.readFileSync('I3_O6.hex');
// const I4_O6 = fs.readFileSync('I4_O6.hex');
// const I5_O6 = fs.readFileSync('I5_O6.hex');
// console.log('DEBUG ', (I2_O6.toString()));
// console.log('DEBUG ', (I3_O6.toString()));
// console.log('DEBUG ', (I4_O6.toString()));
// console.log('DEBUG ', (I5_O6.toString()));

console.log('DEBUG ', I2_O6.toString().localeCompare(I3_O6.toString()));

