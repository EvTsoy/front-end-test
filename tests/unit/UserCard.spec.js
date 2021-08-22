import UserCard from '@/components/users/UserCard.vue'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import users from '@/store/modules/users/users.json'

describe('UserCard.vue', () => {
  test('user text rendering properly', () => {
    const user = users[0]
    const wrapper = shallowMount(UserCard, {
      props: {
        user
      },
      global: {
        components: {
          'router-link': RouterLinkStub
        }
      }
    })

    const name = wrapper.find('.name')
    expect(name.text()).toBe(user.name)

    const desc = wrapper.find('.desc')
    expect(desc.text()).toBe(user.desc)
  })
})
