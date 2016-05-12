var Bob = function() {};

Bob.prototype.hey = function(input) {

	var caps = new RegExp(/[A-Z]/g);

	var silence = new RegExp(/^\s/);

	if (input === input.toUpperCase() && caps.test(input)) {
		return 'Whoa, chill out!';
	} else if (input.endsWith('?')) {
		return "Sure.";
	} else if (input === '' || silence.test(input)) {
		return 'Fine. Be that way!';
	}
	return "Whatever.";
};

module.exports = Bob;
