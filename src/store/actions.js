import * as type from './types'

const actions = {
  NAV_SHOW_SUCCESS: ({
    commit
  }) => {
    commit(type.NAV_SHOW_SUCCESS)
  },
  NAV_SHOW_FAIL: ({
    commit
  }) => {
    commit(type.NAV_SHOW_FAIL)
  },
  showLoading: ({
    commit
  }) => {
    commit(type.SHOW_LOADING)
  },
  hideLoading: ({
    commit
  }) => {
    commit(type.HIDE_LOADING);
  }
}
export default actions
