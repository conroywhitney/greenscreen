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
    messageStyle: function () {
      var fontFamily = {
        'monospace': "'VT323', monospace",
        'sansSerif': "'Open Sans', sans-serif",
        'serif': "'Droid Serif', serif"
      }[this.fontFamily]

      var scaledFontSize = this.fontSize * this.fontScale

      return {
        fontFamily,
        fontSize: `${scaledFontSize}px`
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
  watch: {
    message: function (newMessage) {
      var $message = document.getElementById('message')
      var overflowed = $message.scrollWidth > $message.clientWidth

      if (overflowed) this.$set(this, 'fontScale', this.fontScale - 0.1)
    }
  }
})
