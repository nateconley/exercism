function oneStrand(dna) {
	switch (dna) {
		case 'C':
			return 'G';
		case 'G':
			return 'C';
		case 'A':
			return 'U';
		case 'T':
			return 'A';
	}
}

function dnaTranscriber() {

	this.toRna = function(dna) {
		var rna = '';
		for (var i = 0; i < dna.length; i++) {
			rna += oneStrand(dna[i]);
		}
		return rna;
	}
}

module.exports = dnaTranscriber;