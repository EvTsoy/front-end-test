<template>
  <div class="wp-container">
    <h2 class="wp__title">Choose Destination</h2>
    <p class="destination-desc">
      Please select the destination that you’d like to connect your store with
    </p>

    <div class="destination">
      <div class="destination-item" @click="finishSurvey('Google Analytics')">
        <img :src="require(`@/assets/images/Assets/GA_logo.svg`)" alt="" />
        <h4>Google Analytics</h4>
      </div>
      <div class="destination-item" @click="finishSurvey('Segment')">
        <img :src="require(`@/assets/images/Assets/Segment_logo.svg`)" alt="" />
        <h4>Segment</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Survey3',

  emits: ['nextSurvey'],

  props: {
    user: {
      required: true
    }
  },

  methods: {
    finishSurvey (destination) {
      this.$store.dispatch('auth/updateData', {
        ...this.user,
        destination
      })

      this.$router.push({ name: 'EndPage' })
    }
  }
}
</script>
