<template lang="pug">
#pomodoroClock
  .container.BreakTime
      //- h2.title {{ title }}
      .timer(:class='{ breakTime_color: breakStatus }' )
          span {{ minutes }}
          span :
          span {{ seconds }}
      .countArea(:class='{ breakTime_bg: breakStatus }' )
          #buttons
              button#start(v-if="!timer" @click='startTimer')
                  i.material-icons play_circle_outline
              button#stop(v-if="timer" @click='stopTimer')
                  i.material-icons pause_circle_outline
              button#reset(v-if="resetButton" @click='resetTimer')
                  i.material-icons autorenew
</template>

<script>
export default {
  data () {
    return {
      timer: null,
      breakLength: 0.05,
      sessionLength: 0.05,
      // 總時數,以秒數來作為單位
      totalTime: this.sessionLength * 60,

      resetButton: false,

      // 在時間歸零時候判斷使用
      breakStatus: false,
      sessionCounter: 0,
      firstStart: true,
      title: 'Set your preferred periods!'
    }
  },
  methods: {
    // 開始
    startTimer: function () {
      if (this.firstStart === true) {
        this.totalTime = this.sessionLength * 60
        this.firstStart = false
      }
      // this.totalTime = (this.sessionLength * 60);
      this.timer = setInterval(() => this.countdown(), 1000)
      this.resetButton = true
      if (this.breakStatus === true) {
        this.title = 'break'
      } else {
        this.title = 'work'
      }
    },
    // 暫停
    stopTimer: function () {
      clearInterval(this.timer)
      this.timer = null
      this.resetButton = true
      this.title = 'Paused..'
    },
    // 重製
    resetTimer: function () {
      this.totalTime = this.sessionLength * 60
      clearInterval(this.timer)
      this.timer = null
      this.resetButton = false
      this.title = 'Set your preferred periods!'
    },
    // 調整格式 (如果小於零的話就補零)
    padTime: function (time) {
      // set another 0 for better look
      return (time < 10 ? '0' : '') + time
    },

    // 倒數計時
    countdown: function () {
      // 如果是工作狀態且秒數的時間已到
      if (this.totalTime < 1 && this.breakStatus === false) {
        this.playSound()
        this.stopTimer() // Pause the Timer after break
        // this.sessionCounter++;
        this.breakStatus = true
        this.$emit('breakStauting', this.breakStatus)
        this.title = 'Break time!'
        this.totalTime = this.breakLength * 60
      }
      // 如果是休息狀態且秒數的時間已到
      if (this.totalTime < 1 && this.breakStatus === true) {
        this.playSound()
        this.stopTimer() // Pause the Timer after break
        this.breakStatus = false
        this.$emit('breakStauting', this.breakStatus)
        this.firstStart = true
        this.title = 'Work, work, work!'
        this.totalTime = this.sessionLength * 60
      }
      this.totalTime--
    },
    // 播放聲音
    playSound: function () {
      // var audio = new Audio("Aluminum_Can_Crunch_Series.mp3");
      // audio.play();
    }
  },
  computed: {
    minutes: function () {
      if (this.firstStart === true) {
        return this.sessionLength < 1 ? this.padTime(0) : this.sessionLength
      } else {
        const minutes = Math.floor(this.totalTime / 60)
        return this.padTime(minutes)
      }
    },
    seconds: function () {
      if (this.firstStart === true) {
        return this.padTime(this.sessionLength * 60)
      } else {
        const seconds = this.totalTime - this.minutes * 60
        return this.padTime(seconds)
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/_function.scss";

#pomodoroClock {
  @include size(100%, 540px);
  // border: solid 1px black;

  position: absolute;
  top: 50%;
  right: -270px;
  transform: translateY(-50%);

  box-sizing: border-box;
  z-index: 100;
  .container {
    @include size(100%, 540px);

    .timer {
      font-size: 176px;
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      position: absolute;
      color: $color_red_middle;

      top: 50%;
      transform: translateY(-50%);
      left: -200px;

      transition-duration: $transition_time;
    }
    .countArea {
      @include size(540px, 540px);
      background-color: $color_red_middle;
      box-sizing: border-box;
      border-radius: 50%;
      position: absolute;
      right: 0%;
      display: flex;
      justify-content: center;
      align-items: center;

      transition-duration: $transition_time;
    }
    .breakTime_bg {
      background-color: $color_blue_middle;
      transition-duration: $transition_time;
    }
    .breakTime_color {
      color: $color_blue_middle;
      transition-duration: $transition_time;
    }
  }
}

button {
  background: transparent;
  border: none;
  outline: none;
  @include size(96px, 96px);
  img {
    color: white;
    @include size(100%, 100%);
  }
}

i.material-icons {
  font-size: 100px;
  color: $color_white;
  cursor: pointer;
}
</style>
