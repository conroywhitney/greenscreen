var greenScreen = new Vue({
	el: '#greenScreen',
	data: {
		fontFamily: 'monospace',
		message: 'Hello Jawsh!',
		valign: 'middle'
	},
	computed: {
		messageStyle: function () {
			var fontFamily = {
				'monospace': "'VT323', monospace",
				'sansSerif': "'Open Sans', sans-serif",
				'serif': "'Droid Serif', serif"
			}[this.fontFamily]

			return {
				fontFamily
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
	}
})
