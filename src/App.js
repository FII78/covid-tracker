
import React,{useState,useEffect} from 'react'
import './App.css';
import {
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core"

//STATE = How to write a variable in REACT
//USEEFFECT= runs a piece of code based on a given condition
// the code inside its body will run once  
//whn the component loads and not again
//
///https://disease.sh/v3/covid-19/countries

function App() {

  const [countries,setCountries]=useState([]);

  useEffect(() => {
   //async -> send a request ,wait for it , do something with it
   const getCountriesData=async()=>{
     await fetch ("https://disease.sh/v3/covid-19/countries")
     .then((response)=> response.json())
     .then((data)=>{
       const countries = data.map((country)=>(
         {
           name: country.country   //name of the country
           ,
           value: country.countryInfo.iso2   //the iso representation
         }));

       setCountries(countries)
     });
   };
   getCountriesData();
  }, [])
      

  return (
    <div className="app">
       <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
            <Select
            variant="outlined"
            value="abc"
            >
            {/** Loop through all the countries and show a drop
             down list of the options */}
            {countries.map(country=>(
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }
            {/* <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">bla</MenuItem>
            <MenuItem value="worldwide">ab</MenuItem>
            <MenuItem value="worldwide">abl</MenuItem> */}
            </Select>
        </FormControl>
       </div>
      
      {/** Header */}
      {/** Title + Select input dropdown field */}

      {/** InfoBoxes */}
      {/** InfoBoxes */}
      {/** InfoBoxes */}

      {/** Table */}
      {/** Graph */}

      {/** Map */}

    </div>
  );
}

export default App;
