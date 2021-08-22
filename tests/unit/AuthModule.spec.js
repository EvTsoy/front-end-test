import { createStore } from 'vuex'
import authModule from '@/store/modules/auth'
import users from '@/store/modules/users/users.json'

describe('Vuex Store authModule', () => {
  test('user are the same as logging in', () => {
    const store = createStore({
      modules: {
        auth: authModule
      }
    })

    store.dispatch('auth/login', users[0])
    expect(JSON.stringify(store.state.auth.user)).toEqual(
      JSON.stringify(users[0])
    )
  })
})
