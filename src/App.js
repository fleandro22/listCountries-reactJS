import React, {useEffect, useState} from 'react';
import './App.css';
import ListCountries from './components/ListCountries';
import getCountries from './services/getCountries'

const listNombres = [
  'No hay registros',
];


function App() {
  const [value, setvalue] = useState(listNombres);
  const [query, setquery] = useState('')

  useEffect(function(){
    
    getCountries().then(countrie => setvalue(countrie))
    
  }, []);

  

  const filteredCountries = value.filter( countriee => {
    return countriee.name && countriee.name.toLowerCase().includes(query)
  });

  return (
    <div className="App">
      <section className="App-container">
      <input  type="text" placeholder="Search countries" value={query} onChange={(e) => {
            setquery(e.target.value)
      }}/> 
        <ListCountries value = {filteredCountries}/>
        
      </section>
    </div>
  );
}

export default App;
