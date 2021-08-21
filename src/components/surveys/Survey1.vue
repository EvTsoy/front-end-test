<template>
  <div class="wp-container">
    <h2 class="wp__title">Welcome to Littledata</h2>
    <div class="wp__progress-bar"></div>

    <form action="" class="form">
      <div class="form-group">
        <label for="name" class="form-label">Store name</label>
        <input
          type="text"
          id="name"
          class="form-input"
          placeholder="Your Store Name"
        />
      </div>
      <div class="form-group">
        <label for="url" class="form-label">Store URL</label>
        <input
          type="url"
          placeholder="yourstore.myshopify.com"
          id="url"
          class="form-input"
        />
      </div>

      <div class="form-group email-group">
        <label for="email" class="form-label">Email Notifications</label>
        <input
          type="email"
          id="email"
          class="form-input"
          placeholder="jane@yourstore.com"
        />
        <label class="checkboxes">
          <input type="checkbox" checked="checked" />
          Send me all the important app notifications on this email
          <span class="checkmark"></span>
        </label>
      </div>
      <button @click="nextSurvey" class="button button-survey">NEXT</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Survey1',

  emits: ['nextSurvey'],

  methods: {
    nextSurvey () {
      console.log('next')
      this.$emit('nextSurvey', 1)
    }
  }
}
</script>
