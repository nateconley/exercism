'use strict';

function Hamming() {
	this.compute = function(a ,b) {

		if(a.length !== b.length) {
			throw new Error('DNA strands must be of equal length.');
		}

		let hammingDistance = 0;

		let aArr = a.split('');
		let bArr = b.split('');

		for(let i = 0; i < aArr.length; i++) {
			if(aArr[i] !== bArr[i]) {
				hammingDistance += 1;	
			}
		}

		return hammingDistance;

	}
}

module.exports = Hamming;