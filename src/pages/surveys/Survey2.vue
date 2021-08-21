<template>
  <div class="wp-container">
    <h2 class="wp__title">Welcome to Littledata</h2>
    <div class="wp__progress-bar filled"></div>

    <form action="" class="form">
      <div class="form-group">
        <p class="radio-title">How did you hear about Littledata?</p>
        <label class="radio"
          >Through Shopify app store
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="radio"
          >Recommended by my agency
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="radio"
          >Through a friend / colleague
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="radio"
          >I saw a Littledata ad
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="radio"
          >I read a blog post / article / book by littledata
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
        <label class="radio"
          >Other
          <input type="radio" name="radio" />
          <span class="checkmark"></span>
        </label>
      </div>

      <div class="form-group agency-group">
        <p class="radio-title">
          Are you part of an agency or a consulting firm?
        </p>
        <label class="radio radio-inline"
          >Yes
          <input type="radio" name="agency" />
          <span class="checkmark"></span>
        </label>
        <label class="radio radio-inline"
          >No
          <input type="radio" name="agency" />
          <span class="checkmark"></span>
        </label>
      </div>

      <div class="buttons-bar">
        <button
          @click.prevent="nextSurvey(0)"
          class="button button-survey button-previous"
        >
          Previous
        </button>
        <button
          @click.prevent="nextSurvey(2)"
          class="button button-survey button-next"
        >
          Next
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Survey2',

  emits: ['nextSurvey'],

  methods: {
    nextSurvey (next) {
      this.$emit('nextSurvey', next)
    }
  }
}
</script>
