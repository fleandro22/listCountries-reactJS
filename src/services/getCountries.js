function getCountries(){

  const API_URL = 'https://restcountries.eu/rest/v2/all';

 return  fetch(API_URL)
  .then(res=> res.json())
  .then(response => {

    const data = response
    const countries = data.map(countrie => 
      {
        const {numericCode, name, flag} = countrie
        return {numericCode,name,flag}
      })

    return countries
  })

}

export default getCountries