function camelcase(str, separator) {
    str=str.toLowerCase ()
    const array = str.split(separator)
  for (let i=1; i<array.length; i++)
  array[i]=array[i][0].toUpperCase()+array[i].slice(1)
  
  return array.join('')
  }
  
  console.log(camelcase('Hello world!',' '))
  