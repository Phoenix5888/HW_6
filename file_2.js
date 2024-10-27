function padString(str, length, symbol, toLeft="right") {
    if  (str.length>=length) {
        return str
    }
if (toLeft==='left') {
return str.padStart(length, symbol)

} else {
    
return str.padEnd(length, symbol)
}

    }
    console.log(padString('Anna',6,'*'))
    console.log(padString('Anna',8,'*', 'left'))