var RadioButtonSelectSynchronizer = function(select) {
	this.$radioButtons = $('[data-codus-radio]');
	this.$selectOtions = $('[data-codus-select] option');
}

RadioButtonSelectSynchronizer.prototype.sync = function() {
	// checked radio button --> enable / disable options from select
}

RadioButtonSelectSynchronizer.prototype.bindElements = function() {
	var self = this;

	this.$radioButton.change(function() {
		if (this.value == 'first') {
			self.$selectOptions.each(function() {
				// enable / disable
			});
		} else if (this.value == 'second') {
			self.$selectOptions.each(function() {
				// enable / disable
			});
		} else if (this.value == 'third') {
			self.$selectOptions.each(function() {
				// enable / disable
			});
		}
	});
}