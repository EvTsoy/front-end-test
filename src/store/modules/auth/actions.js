export default {
  login ({ commit }, user) {
    // async login logic later
    commit('login', user)
  },

  updateData ({ commit }, data) {
    commit('updateData', data)
  }
}
