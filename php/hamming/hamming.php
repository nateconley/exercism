<?php

function distance($a, $b) {

	if ( strlen($a) !== strlen($b) ) {
		throw new InvalidArgumentException('DNA strands must be of equal length.');
	}

	$hamming_distance = 0;

	for($i = 0; $i < strlen($a); ++$i) {
		if( substr($a, $i, 1) !== substr($b, $i, 1) ) {
			$hamming_distance += 1;
		}
	}

	return $hamming_distance;

}