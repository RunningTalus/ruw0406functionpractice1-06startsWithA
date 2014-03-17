var startsWithA = function(userWord){
	if (userWord.charAt(0) === 'a'){
		return true;
	} else {
		// (userWord.charAt(0) !== 'a')
		return false;
	}	
};
console.log(startsWithA('aardvark'));
console.log(startsWithA('bear'));