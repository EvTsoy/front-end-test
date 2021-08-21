<template>
  <div class="sp">
    <h2 class="sp__title">Littledata Welcome Flow Test</h2>
    <div class="sp__users">
      <user-card
        v-for="(user, index) in users"
        :key="`user-${index}`"
        :user="user"
      ></user-card>
    </div>
  </div>
</template>

<script>
import UserCard from '@/components/users/UserCard.vue'

export default {
  components: {
    UserCard
  },

  created () {
    this.loadUsers()
  },

  computed: {
    users () {
      return this.$store.getters['users/users']
    }
  },

  methods: {
    loadUsers () {
      this.$store.dispatch('users/loadUsers')
    }
  }
}
</script>
