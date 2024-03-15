function palindrome(X){
    let splitNum = X.toString().split('')
    let reversedArr = splitNum.slice().reverse().join("")
    
    let originalStr= splitNum.join("")

    return originalStr === reversedArr ? true : false

   

}

console.log(palindrome(121)) // true 
console.log(palindrome(-121)) // false
console.log(palindrome(120)) // false