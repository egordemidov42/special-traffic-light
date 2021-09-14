<template id="traffic-light-template">
  <div class="traffic-light">
    <Light
      :color="'red'"
      :isActive="redIsActive"
      :time="redIsActive ? time : null"
      :isBlink="redIsActive ? isBlink : false"/>
    <Light
      :color="'yellow'"
      :isActive="yellowIsActive"
      :time="yellowIsActive ? time : null"
      :isBlink="yellowIsActive ? isBlink : false"/>
    <Light
      :color="'green'"
      :isActive="greenIsActive"
      :time="greenIsActive ? time : null"
      :isBlink="greenIsActive ? isBlink : false"/>
  </div>
</template>

<script>
import Light from '@/components/Light';
export default {
  name: 'TrafficLight',
  components: {
    Light
  },
  data: function() {
    return {
      currentLight: 1,
      prevLight: null,
      time: 10,
      timer: null,
      redIsActive: true,
      yellowIsActive: false,
      greenIsActive: false,
      isBlink: false
    }
  },
  props: {
    lightNumber: {
      type: Number,
      default: 1
    },
    startTime: {
      type: Number
    }
  },
  created: function() {
    this.currentLight = this.lightNumber;
    this.prevLight = this.prevLight || this.getRandomPrevLight([1, 3]);

    this.setActiveLight(this.currentLight);
    this.startTimer();
  },
  watch: {
    '$route': function () {
      this.prevLight = this.currentLight;
      this.currentLight = this.lightNumber;
      this.time = this.startTime;
      this.isBlink = false;
      this.setActiveLight(this.currentLight);
      this.startTimer();
    }
  },
  methods: {
    getRandomPrevLight: function(_arr) {
      var rand = Math.floor(Math.random() * _arr.length);

      return _arr[rand];
    },
    setActiveLight: function(page) {
      switch (page) {
        case 1:
          this.redIsActive = true;
          this.yellowIsActive = false;
          this.greenIsActive = false;
          break;
        case 2:
          this.redIsActive = false;
          this.yellowIsActive = true;
          this.greenIsActive = false;
          this.isBlink = true;
          break;
        case 3:
          this.redIsActive = false;
          this.yellowIsActive = false;
          this.greenIsActive = true;
          break;
        default:
          this.redIsActive = true;
          this.yellowIsActive = false;
          this.greenIsActive = false;
      }
    },
    changeLight: function() {

      if(this.currentLight === 1 || this.currentLight === 3) {
        this.prevLight = this.currentLight;
        this.$router.replace(`/2`);
      }
      else if(this.currentLight === 2 && this.prevLight === 1) {
        this.prevLight = 2;
        this.$router.replace(`/3`);
      }
      else if(this.currentLight === 2 && this.prevLight === 3) {
        this.prevLight = 2;
        this.$router.replace(`/1`);
      }
      else if(this.currentLight === 2 && this.prevLight === 2) {
        this.prevLight = 2;
        this.$router.replace(`/3`);
      }
    },
    startTimer: function() {
      this.time = this.startTime;
      if(this.timer) clearInterval(this.timer);

      this.timer = setInterval(this.setCurrentTime, 1000);
    },
    setCurrentTime: function() {
      if(this.time === 3) {
        this.isBlink = true;
      }
      if(this.time > 1) {
        this.time--;
      }
      else {
        clearInterval(this.timer);
        this.changeLight();
      }
    }
  }
}
</script>


<style scoped>
  .traffic-light {
    width: 150px;
    height: 450px;
    background-color: #444444;
    border-radius: 10px;
    margin: 10px auto;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
</style>
