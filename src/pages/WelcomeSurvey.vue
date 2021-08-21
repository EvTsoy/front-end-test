<template>
  <welcome-wrapper>
    <keep-alive>
      <component
        :is="currentSurveyComponent"
        @nextSurvey="nextSurvey"
      ></component>
    </keep-alive>
  </welcome-wrapper>
</template>

<script>
import WelcomeWrapper from '@/components/UI/WelcomeWrapper.vue'
import Survey1 from '@/components/surveys/Survey1'
import Survey2 from '@/components/surveys/Survey2'
import Survey3 from '@/components/surveys/Survey3'

export default {
  components: {
    WelcomeWrapper,
    Survey1,
    Survey2,
    Survey3
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
    }
  },

  methods: {
    nextSurvey (next) {
      this.currentSurvey = this.surveys[next]
    }
  }
}
</script>
