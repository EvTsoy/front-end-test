import { createStore } from 'vuex'
import usersModule from '@/store/modules/users'
import users from '@/store/modules/users/users.json'

describe('Vuex Store', () => {
  test('length users are the same as commiting', () => {
    const store = createStore({
      modules: {
        users: usersModule
      }
    })

    store.dispatch('users/loadUsers')
    expect(store.state.users.users).toHaveLength(3)
  })

  test('users are the same as commiting', () => {
    const store = createStore({
      modules: {
        users: usersModule
      }
    })

    store.dispatch('users/loadUsers')
    expect(JSON.stringify(store.state.users.users)).toEqual(
      JSON.stringify(users)
    )
  })
})
