<template>
  <div class="sp__users-card">
    <img
      :src="require(`@/assets/images/Assets/${user.image}`)"
      alt="user.image"
    />
    <h3 class="name">{{ user.name }}</h3>
    <p class="desc">
      {{ user.desc }}
    </p>
    <router-link
      :to="{ name: 'WelcomeSurvey' }"
      class="button button-login"
      href=""
      @click.prevent="login"
      >Enter {{ user.name }}</router-link
    >
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },

  methods: {
    login () {
      console.log('user login')
    }
  }
}
</script>
