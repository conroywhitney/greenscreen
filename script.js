var greenScreen = new Vue({
	el: '#greenScreen',
	data: {
		font: 'monospace',
		message: 'Hello Jawsh!',
		valign: 'Middle'
	},
	computed: {
		fontClass: function () {
			return {
				// This will turn into the class monospace, serif, and sansSerif
				// Depending on the value="" of the selected font dropdown
				// And maps to the #message.[monospace|serif|sansSerif] css class
				[`${this.font}`]: true
			}
		},
		valignClass: function () {
			return {
				// This will turn into the class valignTop, valignMiddle, valignBottom
				// Depending on the value="[Top|Middle|Bottom]" of the selected radio
				// And maps to the #messageWrapper.valign[Top|Middle|Bottom] css class
				[`valign${this.valign}`]: true
			}
		}
	}
})
