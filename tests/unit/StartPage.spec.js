import { createStore } from 'vuex'
import StartPage from '@/pages/StartPage'
import { mount, shallowMount, flushPromises } from '@vue/test-utils'
import usersModule from '@/store/modules/users'
import authModule from '@/store/modules/auth'
import users from '@/store/modules/users/users.json'
import UserCard from '@/components/users/UserCard'
import router from '@/router'

describe('StartPage.vue', () => {
  test('renders header properly', () => {
    const store = createStore({
      modules: {
        users: usersModule
      }
    })

    const wrapper = shallowMount(StartPage, {
      global: {
        mocks: {
          $store: store
        }
      }
    })

    expect(wrapper.text()).toContain('Littledata Welcome Flow Test')
  })

  test('users loaded properly', () => {
    const store = createStore({
      modules: {
        users: usersModule
      }
    })

    const wrapper = shallowMount(StartPage, {
      global: {
        mocks: {
          $store: store
        }
      }
    })

    const userCards = wrapper.findAllComponents(UserCard)
    expect(userCards).toHaveLength(users.length)

    userCards.forEach((card, idx) => {
      expect(card.props().user.id).toEqual(users[idx].id)
      expect(card.props().user.name).toEqual(users[idx].name)
    })
  })

  test('users can login with buttons and route to welcome', async () => {
    window.scrollTo = () => false

    const store = createStore({
      modules: {
        users: usersModule,
        auth: authModule
      }
    })

    const wrapper = mount(StartPage, {
      global: {
        plugins: [router],

        mocks: {
          $store: store
        }
      }
    })

    const buttons = wrapper.findAll('.button-login')

    for (let i = 0; i < buttons.length; i++) {
      await buttons[0].trigger('click')
      await flushPromises()
      expect(wrapper.vm.$route.path).toEqual('/welcome')
    }
  })
})
