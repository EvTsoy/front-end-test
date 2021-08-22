import RadioItem from '@/components/surveys/RadioItem.vue'
import { shallowMount } from '@vue/test-utils'

describe('RadioItem.vue', () => {
  test('renders option from survey2', () => {
    const option = 'test'

    const wrapper = shallowMount(RadioItem, {
      propsData: {
        option
      }
    })

    const optionString = wrapper.find('.radio')

    expect(optionString.text()).toBe(option)
  })

  test('renders option in value attribute', () => {
    const option = 'Through Shopify app store'

    const wrapper = shallowMount(RadioItem, {
      propsData: {
        option
      }
    })

    const optionString = wrapper.find('input')
    expect(optionString.attributes().value).toBe('Through Shopify app store')
  })
})
