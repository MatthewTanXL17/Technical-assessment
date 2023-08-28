function recursiveReverseString(inputString, currentIndex = 0) {
    if (currentIndex === inputString.length) {
        return '';
    }
    
    const currentChar = inputString[currentIndex];
    const restOfString = recursiveReverseString(inputString, currentIndex + 1);
    
    return restOfString + currentChar;
}

console.log(recursiveReverseString("Artisan"));
console.log(recursiveReverseString("Google"));