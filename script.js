var greenScreen = new Vue({
  el: '#greenScreen',
  data: {
    fontFamily: 'monospace',
    fontScale: 1,
    fontSize: '96',
    message: 'Greenscreen',
    valign: 'middle'
  },
  computed: {
    scaledFontSize: function () {
      return this.fontSize * this.fontScale
    },
    messageStyle: function () {
      var fontFamily = {
        'monospace': "'VT323', monospace",
        'sansSerif': "'Open Sans', sans-serif",
        'serif': "'Droid Serif', serif"
      }[this.fontFamily]

      return {
        fontFamily,
        fontSize: `${this.scaledFontSize}px`
      }
    },
    wrapperStyle: function () {
      var justifyContent = {
        top: 'flex-start',
        middle: 'center',
        bottom: 'flex-end'
      }[this.valign]

      return {
        justifyContent
      }
    }
  },
  methods: {
    resetFontScale: function () {
      this.$set(this, 'fontScale', 1)
    },
    updateFontScale: function () {
      var scaleSpeed = 0.10
      var $message = document.getElementById('message')
      var overflowed = $message.scrollWidth > $message.clientWidth

      if (overflowed) this.$set(this, 'fontScale', this.fontScale - scaleSpeed)
    }
  },
  watch: {
    fontSize: function (newFontSize) {
      this.resetFontScale()
    },
    message: function (newMessage) {
      this.updateFontScale()
    }
  }
})
