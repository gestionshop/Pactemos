const number_format = (amount) => {
	amount += ''
	return amount.split(".").join("")
}

const FormatMil = (amount) => {
  let num = amount+= ''
  num = num.replace(/\./g,'')
  if(!isNaN(num)){
    num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
    num = num.split('').reverse().join('').replace(/^[\.]/,'');
    return num
  }
  else{
    num = number_format(num)
    num = parseInt(num)
    if(!num) return ""
    return FormatMil(num)
  }  
}

export {
	number_format,
  FormatMil
}