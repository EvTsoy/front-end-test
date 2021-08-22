import { createStore } from 'vuex'
import Survey1 from '@/pages/surveys/Survey1'
import { shallowMount } from '@vue/test-utils'
import authModule from '@/store/modules/auth'
import users from '@/store/modules/users/users.json'

describe('Survey1.vue', () => {
  test('renders header properly', () => {
    const store = createStore({
      modules: {
        users: authModule
      }
    })

    const wrapper = shallowMount(Survey1, {
      props: {
        user: users[0]
      },
      global: {
        mocks: {
          $store: store
        }
      }
    })

    expect(wrapper.find('.wp__title').text()).toContain('Welcome to Littledata')
  })
})
