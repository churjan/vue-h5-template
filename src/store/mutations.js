import * as types from './mutation-types.js'
const mutations = {
  [types.SET_MODAL](state, payload) {
    state.isShowModal=payload.bool;
  }
};
export default mutations;
