function mult1(str, number) {
	var temp; 
	var strResult = ""; 
	var rest = 0;

	for (var i = str.length - 1; i >= 0; i--) {
		temp = ""+ ( str[i] * number + +rest );

		if (temp.length == 2) {
			strResult = temp[1] + strResult;
			rest = temp[0];
		} else {
			strResult = temp[0] + strResult;
			rest = 0;
		}

		if (i == 0 && rest != 0) {
			strResult = rest + strResult;
		}
	}
	return strResult;
}

function sumOfTwoStr(strNumber1, strNumber2) {
	var strSum = "";
	var temp = "";
	var rest = 0;

	while (strNumber2.length > strNumber1.length) {
		strNumber1 = "0" + strNumber1;
	}

	for (var i = strNumber2.length - 1; i >= 0; i--) {
		temp = "" + ( +strNumber1[i] + +strNumber2[i] + +rest);

		if (temp.length == 2) {
			strSum = temp[1] + strSum;
			rest = temp[0];
		} else {
			strSum = temp[0] + strSum;
			rest = 0;
		}

		if (i == 0 && rest != 0) {
			strSum = rest + strSum;
		}
	}
	return strSum;
}

module.exports = function multiply(first, second) {

    // your solution
	var sum = mult1( first, second[second.length-1] );
	var numOfZeros = 1;

	for (var i = second.length - 2; i >= 0; i--) {
		var zeros = new Array(numOfZeros+1).join("0");
		strNumberTemp = mult1( first, second[i] ) + zeros;
		numOfZeros +=1;

		sum = sumOfTwoStr( sum, strNumberTemp );
	}

	return sum;
}
