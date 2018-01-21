import utils from './utils';

const entityTypeEnums = {
  NULL: 0,
  Farmer: 1,
  Govt: 2,
  Transporter: 3,
  Retail_Stores: 4
};

const farmerTypeEnums = {
  NULL: 0,
  Organic: 1,
  Regular: 2
};

export function login({ username, password, entityType, farmerType }) {
  return async function (dispatch, getState) {
    try {
      const admin = await utils.signUp(username, password);
      const contract = await utils.triggerContract(admin, 'EntityManager', 'createEntity', {
        username: admin.username,
        password: admin.password,
        entityType: entityTypeEnums[entityType] || 0,
        farmerType: farmerTypeEnums[farmerType] || 0,
        pubKey: 'sldkjsldkfj',
      });
      console.log('response is', contract);
      dispatch({
        type: 'LOGIN',
        payload: { username, password },
      });
    } catch(e) {
      console.log('Error logging in is', e);
    }
  }
}
