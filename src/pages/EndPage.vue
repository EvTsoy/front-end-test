<template>
  <div class="ep">
    <h2 class="ep__title">Littledata App</h2>
    <div>
      <img
        :src="require('@/assets/images/Assets/Shopify_meditation@2x_1.png')"
        alt=""
      />
    </div>
    <router-link :to="{ name: 'StartPage' }" class="button button-end"
      >Go BACK TO START</router-link
    >
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      const user = vm.$store.getters['auth/user']
      if (!user) return vm.$router.push({ name: 'StartPage' })
    })
  },

  created () {
    console.log(this.$store.getters['auth/user'])
  }
}
</script>
