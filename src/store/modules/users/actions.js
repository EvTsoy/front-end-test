import users from './users.json'
export default {
  loadUsers ({ commit }) {
    // later async request
    commit('loadUsers', users)
  }
}
