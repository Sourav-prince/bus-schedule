const getDynamicPrice = (basePrice:any, exchangeRate: any ) => {

  const convertedPrice = basePrice*exchangeRate.value
  return `${exchangeRate.label} ${convertedPrice.toFixed(2)}`
}

export  {
  getDynamicPrice, 
}