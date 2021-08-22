import { createStore } from 'vuex'
import WelcomeSurvey from '@/pages/WelcomeSurvey'
import { mount, flushPromises } from '@vue/test-utils'
import router from '@/router'
import users from '@/store/modules/users/users.json'
import authModule from '@/store/modules/auth'

describe('WelcomeSurvey.vue', () => {
  test('user can pass first survey', async () => {
    router.push('/welcome')
    await router.isReady()

    const store = createStore({
      modules: {
        auth: authModule
      }
    })
    const user = users[2]

    const wrapper = mount(WelcomeSurvey, {
      global: {
        plugins: [router],
        mocks: {
          $store: store,
          getCurrentUser: user
        }
      }
    })

    await wrapper.find('#store').setValue(user.storeName)
    await wrapper.find('#url').setValue(user.storeUrl)
    await wrapper.find('#email').setValue(user.email)

    await wrapper.find('form').trigger('submit')
    await flushPromises()
    expect(wrapper.vm.$route.path).toEqual('/welcome')
    expect(wrapper.html()).toContain('How did you hear about Littledata?')
  })
})
