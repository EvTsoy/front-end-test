<template>
  <label class="radio"
    >{{ option }}
    <input type="radio" name="radio" :value="option" v-model="from" />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  props: {
    option: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      from: null
    }
  },

  watch: {
    from () {
      this.$emit('chooseOption', this.from)
    }
  }
}
</script>
