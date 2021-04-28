export const calculateLuckyNumber = (str: string) => {
  
  const repeated = str.split('').reduce((acc: any, value: any) => {    
    acc[value] = ++acc[value] || 1
    return acc
  }, {})   

  let prevCount: number = 0
  let nRepeated: string = ''

  Object.keys(repeated).forEach(key => {
    const n = repeated[key]
    if(prevCount === 0){
      prevCount = n
      nRepeated = key
    }else {
      if(n > prevCount){
        prevCount = n
        nRepeated = key
      }
    }
  })

  console.log('count ' + prevCount + '  number duplicate ' + nRepeated )
  return nRepeated
  
}
