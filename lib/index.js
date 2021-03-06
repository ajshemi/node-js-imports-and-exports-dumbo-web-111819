const interface = require('./interface');
const util = require('util');
 
const moduleName = interface();
 
try {
//   console.log('result',moduleName)
  const moduleToInspect = require(moduleName);
 
  console.log(util.inspect(moduleToInspect, { colors: true }));
} catch (error) {
  console.error(`Unable to inspect module ${moduleName}.`);
  console.error(`Reason: ${error.message}`);
}

// const util = require('util');
// const interface = require('./interface');

 
// console.log(util.isArray([2,6,3]));


// const userArgs = interface();
// const moduleName = userArgs[0];

// if (userArgs.length > 1) {
//   console.warn('Warning: you provided more than one argument.');
// }
 
// try {
//   const moduleToInspect = require(moduleName);
 
//   console.log(util.inspect(moduleToInspect, { colors: true }));
// } catch (error) {
//   console.error(`Unable to inspect module ${moduleName}.`);
//   console.error(`Reason: ${error.message}`);
//   process.exitCode = 1;
// }