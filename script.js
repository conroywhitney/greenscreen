var greenScreen = new Vue({
	el: '#greenScreen',
	data: {
		valign: 'Middle',
		message: 'Hello Jawsh!'
	},
	computed: {
		wrapperClass: function () {
			return {
				// This will turn into the class valignTop, valignMiddle, valignBottom
				// Depending on the value="[Top|Middle|Bottom]" of the selected radio
				// And maps to the #messageWrapper.valign[Top|Middle|Bottom] css class
				[`valign${this.valign}`]: true
			}
		}
	}
})
