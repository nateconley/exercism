<?php

//
// This is only a SKELETON file for the "Hamming" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function distance($a, $b)
{
    //
    // YOUR CODE GOES HERE
    //

		$hamming_distance = 0;

		for($i = 0; $i < strlen($a); ++$i) {
			if( substr($a, $i, 1) !== substr($b, $i, 1) ) {
				$hamming_distance += 1;
			}
		}

		return $hamming_distance;
}
