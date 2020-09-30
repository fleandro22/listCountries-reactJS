import React, {useEffect, useState} from 'react';
import './App.css';
import ListCountries from './components/ListCountries';
import getCountries from './services/getCountries'

const listNombres = [
  'No hay registros',
];

function App() {
  const [value, setvalue] = useState(listNombres);
  const [searchCountry, setSearchCountry] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(function(){
    
    getCountries().then(country => setvalue(country))

    const results = value.filter(keycontry =>
      keycontry.name && keycontry.name.toLowerCase().includes(searchCountry)
    );

    setSearchResults(results); 
  }, [searchCountry]);

  
  return (
    <div className="App">
      <section className="App-container">
      <input  type="text" placeholder="Search countries" value={searchCountry} onChange={(e) => {
            setSearchCountry(e.target.value);
      }}/> 
        <ListCountries value = {searchResults}/>
        
      </section>
    </div>
  );
}

export default App;
