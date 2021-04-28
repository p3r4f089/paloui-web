export const validateNumber = (value: string, minlength: number, maxlength: number) => {
  if(value != null){
    if(value.length >= minlength && value.length <= maxlength){
      return true
    }
  }
  return false
}
