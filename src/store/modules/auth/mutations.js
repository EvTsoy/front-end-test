export default {
  login (state, user) {
    state.user = {
      ...user
    }
  },

  updateData (state, data) {
    state.user = {
      ...data
    }
  }
}
