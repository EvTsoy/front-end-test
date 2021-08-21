<template>
  <div class="wp-container">
    <h2 class="wp__title">Welcome to Littledata</h2>
    <div class="wp__progress-bar filled"></div>

    <form action="" class="form" @submit.prevent="submitForm">
      <div class="form-group">
        <p class="radio-title">How did you hear about Littledata?</p>

        <radio-item
          v-for="(option, index) in options"
          :key="`option-${index}`"
          :option="option"
          @chooseOption="chooseOption"
        ></radio-item>
      </div>

      <div class="form-group agency-group">
        <p class="radio-title">
          Are you part of an agency or a consulting firm?
        </p>
        <label class="radio radio-inline"
          >Yes
          <input type="radio" name="agency" v-model="agency" :value="true" />
          <span class="checkmark"></span>
        </label>
        <label class="radio radio-inline"
          >No
          <input type="radio" name="agency" v-model="agency" :value="false" />
          <span class="checkmark"></span>
        </label>
      </div>

      <div class="buttons-bar">
        <button
          @click.prevent="nextSurvey(0)"
          class="button button-survey button-previous"
          v-if="user.status === 'new'"
        >
          Previous
        </button>
        <button class="button button-survey button-next">
          Next
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import RadioItem from '@/components/surveys/RadioItem.vue'
export default {
  name: 'Survey2',

  components: {
    RadioItem
  },

  emits: ['nextSurvey'],

  props: {
    user: {
      retuired: true
    }
  },

  data () {
    return {
      options: [
        'Through Shopify app store',
        'Recommended by my agency',
        'Through a friend / colleague',
        'I saw a Littledata ad',
        'I read a blog post / article / book by littledata',
        'Other'
      ],
      from: null,
      agency: null
    }
  },

  methods: {
    nextSurvey (next) {
      this.$emit('nextSurvey', next)
    },

    chooseOption (option) {
      this.from = option
    },

    validateForm () {
      this.formIsValid = true
      if (!this.from || this.agency === null) {
        this.formIsValid = false
        alert('Please choose')
      }
    },

    submitForm () {
      this.validateForm()
      if (!this.formIsValid) return

      const formData = {
        from: this.from,
        agency: this.agency
      }

      this.$store.dispatch('auth/updateData', {
        ...this.user,
        ...formData
      })

      this.user.storeUrl.includes('myshopify.com')
        ? this.nextSurvey(2)
        : this.$router.push({ name: 'EndPage' })
    }
  }
}
</script>
