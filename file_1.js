function doubleLetter (str) {
    let result =""
for (let i=1; i<=str.length; i++) {
   console.log(result)
    result=result.padEnd(i*2,str[i-1])
// result+=str[i]+str[i]
}
return result
}


console.log(doubleLetter("Hello"))
