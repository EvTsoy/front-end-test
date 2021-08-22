<template>
  <div class="wp-container">
    <h2 class="wp__title">Welcome to Littledata</h2>
    <div class="wp__progress-bar"></div>

    <form action="" class="form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="store" class="form-label">Store name</label>
        <input
          type="text"
          id="store"
          class="form-input"
          placeholder="Your Store Name"
          v-model="storeName"
        />
      </div>
      <div class="form-group">
        <label for="url" class="form-label">Store URL</label>
        <input
          type="url"
          placeholder="yourstore.myshopify.com"
          id="url"
          class="form-input"
          v-model="storeUrl"
        />
      </div>

      <div class="form-group email-group">
        <label for="email" class="form-label">Email Notifications</label>
        <input
          type="email"
          id="email"
          class="form-input"
          placeholder="jane@yourstore.com"
          v-model="email"
        />
        <label class="checkboxes">
          <input type="checkbox" v-model="subscription" />
          Send me all the important app notifications on this email
          <span class="checkmark"></span>
        </label>
      </div>
      <button @click="scrollToTop" class="button button-survey">
        Next
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Survey1',

  emits: ['nextSurvey'],

  props: {
    user: {
      required: true
    }
  },

  data () {
    return {
      storeName: null,
      storeUrl: null,
      email: null,
      subscription: true,
      formIsValid: true
    }
  },

  methods: {
    nextSurvey (next) {
      this.$emit('nextSurvey', next)
    },

    scrollToTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },

    validateForm () {
      this.formIsValid = true
      if (!this.storeName || !this.storeUrl || !this.email) {
        this.formIsValid = false
        alert('Please fill all fields')
      }
    },

    submitForm () {
      this.validateForm()
      if (!this.formIsValid) return

      const formData = {
        storeName: this.storeName,
        storeUrl: this.storeUrl,
        email: this.email,
        subscription: this.subscription
      }

      this.$store.dispatch('auth/updateData', {
        ...this.user,
        ...formData
      })

      this.nextSurvey(1)
    }
  }
}
</script>
