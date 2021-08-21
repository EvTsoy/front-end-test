import { createStore } from 'vuex'
import usersModule from './modules/users'
import authModule from './modules/auth'

const store = createStore({
  modules: {
    users: usersModule,
    auth: authModule
  }
})

export default store
