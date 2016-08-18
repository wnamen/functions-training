function combineWords(word1, word2) {
    return word1 + word2;
}

var result = combineWords('dog', 'house');
console.log(result);



function repeatPhrase(phrase, n) {
    for (var i = 1; i <= 5; i++) {
        console.log(phrase);
    }
}

repeatPhrase("Hello", 5);



function toTheNthPower(number, power) {
    return number ** power;
}

var result = toTheNthPower(4, 5);
console.log(result);



function areaOfACircle(radius) {
    return (Math.PI * (radius ** 2));
}

var result = areaOfACircle(2);
console.log(result);



function pythagoreanTheorem(a, b) {
    return Math.sqrt((a ** 2) + (b ** 2));
}

var result = pythagoreanTheorem(3, 4);
console.log(result);



function isXEvenlyDivisibleByY(x, y) {
    if ( x % y === 0) {
        return true;
    } else {
        return false;
    }
}

var result = isXEvenlyDivisibleByY(99, 3);
console.log(result);




function countVowels(word) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

    var lowerChars = word.toLowerCase().split('');
    var counter = 0;

    for (var i = 0; i <= lowerChars.length - 1; i++) {
        var char = lowerChars[i];

        if (vowels.indexOf(char) !== -1) {
            counter += 1;
        }
    }

    return counter;
}

var result = countVowels("stealing");
console.log(result);



function findWdi(arr){
    for (var i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === 'wdi') {
            return true;
        }
    }

    return false;
}

findWdi([9,'Bart Simpson', true, 'wdi']) // returns true
findWdi(['a','b','c']) // returns false



function printTriangle(length) {
    var triangle = '';

    for (var i = 1; i <= length; i++) {
        triangle += '*';
        console.log(triangle);
    }
}

printTriangle(3);



function printPyramid(length) {

	var pyramid = "";

    for (var i = 1; i <= length; i++) {

        for(j = 1; j <= length - i; j++) {
            pyramid += ' ';
        }

        for(j = 1; j <= 2 * i - 1 ; j++) {
            pyramid += "*";
        }

        console.log(pyramid);
	pyramid = "";
    }
}

printPyramid(10);
