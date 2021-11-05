
const serviceSendToSalesforce = (values) => {
  const body = Object.keys(values).map(key => {
    const keyURI = encodeURIComponent(key)
    const value = encodeURIComponent(values[key])
    return `${keyURI}=${value}`
  }).join('&')

  return fetch(
    'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body
    }
  )
}

export {
  serviceSendToSalesforce
}