import { createStore } from 'vuex'
import Survey2 from '@/pages/surveys/Survey2'
import { shallowMount } from '@vue/test-utils'
import authModule from '@/store/modules/auth'
import users from '@/store/modules/users/users.json'

describe('Survey2.vue', () => {
  test('renders header properly', () => {
    const store = createStore({
      modules: {
        users: authModule
      }
    })

    const wrapper = shallowMount(Survey2, {
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
    expect(wrapper.findAll('.radio-title')[0].text()).toContain(
      'How did you hear about Littledata?'
    )
    expect(wrapper.findAll('.radio-title')[1].text()).toContain(
      'Are you part of an agency or a consulting firm?'
    )
  })
})
