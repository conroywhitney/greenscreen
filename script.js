var greenScreen = new Vue({
	el: '#greenScreen',
	data: {
		valign: 'top',
		message: 'Hello Jawsh!'
	},
	computed: {
		wrapperClass: function () {
			return {
				valignTop: this.valign === 'top',
				valignMiddle: this.valign === 'middle',
				valignBottom: this.valign === 'bottom',
			}
		}
	}
})
