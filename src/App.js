import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import { useEffect, useState } from 'react'
import axios from 'axios'
import CountriesList from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';











const countriesList = 'https://ih-countries-api.herokuapp.com/countries'
function App() {

  const [country, setCountry] = useState([])
    
    useEffect(()=>{
        axios
        .get(countriesList)
        .then((response)=>{
            setCountry(response.data)
        })

    },[])


  return (
    <div className="App">
      <Navbar/>
      <CountriesList country={country}/>
    </div>
  );
}

export default App;
