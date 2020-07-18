require('ts-node',).register(require('../tsconfig',),);
const Worker = require('worker_threads',);
const worker = require('../src/worker/calculator',);

Worker.parentPort.on(
  'message',
  (message,) => Worker.parentPort.postMessage(worker(message, ),),
);
