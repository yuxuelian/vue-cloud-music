import * as types from './types'
export default {
  [types.UPDATE_DIRECTION](state, payload) {
    state.direction = payload.direction
  },
}
