<template>
  <div class="not-found-page">
    <h1>{{ msg }}</h1>
    <h2>Redirect in {{ time }} sec.</h2>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data () {
    return {
      msg: 'Page not found!',
      redirectTime: 10,
      time: null,
      timer: null,
    }
  },
  created: function() {
    this.startTimer();
  },
  methods: {
    startTimer: function() {
      this.time = this.redirectTime;

      if(this.timer) clearInterval(this.timer);

      this.timer = setInterval(this.setCurrentTime, 1000);
    },
    setCurrentTime: function() {
      if(this.time > 1) {
        this.time--;
      }
      else {
        clearInterval(this.timer);
        this.redirect();
      }
    },
    redirect: function() {
      this.$router.replace(`/2`);
    }
  }
}
</script>

<style>

</style>
