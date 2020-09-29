import React from 'react'
import Countries from './Countries'

function ListCountries({value}){

  return value.map(values => 
    <Countries 
      key={values.numericCode} 
      flag ={values.flag} 
      name={values.name} 
      id={values.numericCode} 

    />
    
  )
}

export default ListCountries