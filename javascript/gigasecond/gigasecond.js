function Gigasecond(time) {
	this.time = time;
	this.date = function() {
		var timeInSeconds = time.getTime();
		var gigaSecond = Math.pow(10, 9) * 1000;
		return new Date(timeInSeconds + gigaSecond);
	}
};


module.exports = Gigasecond;