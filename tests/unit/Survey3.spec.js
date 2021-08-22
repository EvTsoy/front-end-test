import { createStore } from 'vuex'
import Survey3 from '@/pages/surveys/Survey3'
import { shallowMount } from '@vue/test-utils'
import authModule from '@/store/modules/auth'
import users from '@/store/modules/users/users.json'

describe('Survey3.vue', () => {
  test('renders header properly', () => {
    const store = createStore({
      modules: {
        users: authModule
      }
    })

    const wrapper = shallowMount(Survey3, {
      props: {
        user: users[0]
      },
      global: {
        mocks: {
          $store: store
        }
      }
    })

    expect(wrapper.find('.wp__title').text()).toContain('Choose Destination')
    expect(wrapper.find('.destination-desc').text()).toContain(
      'Please select the destination that you’d like to connect your store with'
    )
  })
})
