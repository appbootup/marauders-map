import ba from 'blockapps-rest-mod';
const { rest, common } = ba;
const { util, config, Promise } = common;
const co = require('co');

async function start() {
  const admin = rest.createUser('fernandes', 'lololotrol');
  const value = await co(admin);
  console.log('value is', value);
}

export default {
  start
};
