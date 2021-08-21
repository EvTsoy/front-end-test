import { createStore } from 'vuex'
import usersModule from './modules/users'

const store = createStore({
  modules: {
    users: usersModule
  }
})

export default store
