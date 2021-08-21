<template>
  <welcome-wrapper>
    <keep-alive>
      <component
        :is="currentSurveyComponent"
        @nextSurvey="nextSurvey"
        :user="getCurrentUser"
      ></component>
    </keep-alive>
  </welcome-wrapper>
</template>

<script>
import WelcomeWrapper from '@/components/UI/WelcomeWrapper.vue'
import Survey1 from '@/pages/surveys/Survey1'
import Survey2 from '@/pages/surveys/Survey2'
import Survey3 from '@/pages/surveys/Survey3'

export default {
  components: {
    WelcomeWrapper,
    Survey1,
    Survey2,
    Survey3
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      const user = vm.$store.getters['auth/user']
      if (!user) return vm.$router.push({ name: 'StartPage' })
      vm.nextPage(user)
    })
  },

  data () {
    return {
      currentSurvey: 'Survey1',
      surveys: ['Survey1', 'Survey2', 'Survey3']
    }
  },

  computed: {
    currentSurveyComponent () {
      return this.currentSurvey.toLowerCase()
    },

    getCurrentUser () {
      return this.$store.getters['auth/user']
    }
  },

  methods: {
    nextSurvey (next) {
      this.currentSurvey = this.surveys[next]
    },

    nextPage (user) {
      switch (user.status) {
        case 'invited':
          this.currentSurvey = 'Survey2'
          break
        case 'registered':
          this.$router.push({ name: 'EndPage' })
          break
        default:
          this.$router.push({ name: 'WelcomeSurvey' })
      }
    }
  }
}
</script>
