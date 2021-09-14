<template id="light">
  <div v-bind:class="color" class="light__signal">
    <div v-bind:class="{ active: isActive, blink: isBlink }" class="light__dim-layer"></div>
    <span v-if="isActive" v-bind:class="{ 'text-blink': isBlink }" class="light__timer">{{ time }}</span>
  </div>
</template>

<script>
  export default {
    name: 'Light',
    props: {
      color: {
        type: String
      },
      isActive: {
        type: Boolean
      },
      time: {
        type: Number
      },
      isBlink: {
        type: Boolean
      }
    }
  }
</script>

<style scoped>
  .light__signal {
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 50px;
    position: relative;
  }

  .red {
    color: red;
    background: red;
    background-color: red;
    background-image: radial-gradient(brown,transparent);
    background-size: 5px 5px;
    box-shadow: 0 0 20px #111 inset;
  }

  .yellow {
    color: yellow;
    background: yellow;
    background-color: yellow;
    background-image: radial-gradient(orange,transparent);
    background-size: 5px 5px;
    box-shadow: 0 0 20px #111 inset;
  }

  .green {
    color: green;
    background-color: green;
    background: green;
    background-image: radial-gradient(lime,transparent);
    background-size: 5px 5px;
    box-shadow: 0 0 20px #111 inset;
  }

  .light__dim-layer {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background-color: #000;
    opacity: 0.7;
  }

  .active {
    opacity: 0;
  }

  .light__timer {
    font-size: 60px;
    line-height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    color: #fff;
  }

  .text-blink {
    animation: textBlink 2s infinite;
  }

  @keyframes textBlink {
    0% { color: inherit; }
    25% { color: #fff; }
    50% { color: inherit; }
    75% { color: #fff; }
    100% { color: inherit; }
  }

  .blink {
    animation: blink 2s infinite;
  }

  @keyframes blink {
    0% { opacity: 0.7 }
    25% { opacity: 0.1 }
    50% { opacity: 0.7 }
    75% { opacity: 0.1 }
    100% { opacity: 0.7 }
  }
</style>
