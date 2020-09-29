import React from 'react';

function Countries({flag,name}){

  return (
  
    <div className = 'Countrie'>   
      <div className = 'Countrie__flag'>
        <img src={flag} alt={name}></img>
      </div>
      <div className = 'Countrie__name'>
        {name}
      </div>
        
    </div>
  
  )

}

export default Countries