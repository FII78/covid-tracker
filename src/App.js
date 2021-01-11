
import React,{useState,useEffect} from 'react'
import './App.css';
import {
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core"
import InfoBox from "./InfoBox"
import Map from "./Map"
import Table from "./Table"
import {sortData} from "./util"
import LineGraph from "./LineGraph"
import {Card,CardContent,Typography} from "@material-ui/core"

//STATE = How to write a variable in REACT
//USEEFFECT= runs a piece of code based on a given condition
// the code inside its body will run once  
//whn the component loads and not again
//
///https://disease.sh/v3/covid-19/countries

function App() {

  const [countries,setCountries]=useState([]);
  const [tableData,setTableData]=useState([]);

  const [country,setCountry]=useState("WorldWide");
  const [countryInfo,setCountryInfo]=useState({});
  

useEffect(()=>{
  fetch("https://disease.sh/v3/covid-19/all")
  .then(response=>response.json())
  .then((data)=>{
    setCountryInfo(data);
  })
},[])


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
       
         const sortedData=sortData(data);
       setTableData(sortedData);
       setCountries(countries)
     });
   };
   getCountriesData();
  }, [])
      
  
  const onCountryChange=async (event)=>{
    const countryCode=event.target.value;
    const url = countryCode === 'WorldWide' 
    ? 'https://disease.sh/v3/covid-19/all' 
    : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

   await fetch(url)
    .then((response) => response.json())
    .then((data)=>{
      setCountry(countryCode);

      //All of the data from the country response
        setCountryInfo(data);
    });
  };
console.log("country INFO",countryInfo);
  

  return (
    <div className="app">
      <div className="app__left">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
            <Select
            variant="outlined"
            onChange={onCountryChange}
            value={country}

            >
            {/** Loop through all the countries and show a drop
             down list of the options */}
            <MenuItem value="WorldWide">WorldWide</MenuItem>
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
      
      <div className="app__stats">
          {/** InfoBoxes title=corona virus cases */}
          <InfoBox title="Coronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases}   />
          {/** InfoBoxes title corona recoveries */}
          <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
          {/** InfoBoxes */}
          <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
      </div>
      {/** Title + Select input dropdown field */}

      {/** Map */}
      <Map/>

      </div>
      <Card className="app__right">
            
            <CardContent>
                {/** Table */}
              <h3>Live cases by country</h3>
              <Table countries={tableData}/>
                {/** Graph */}
              <h3>Worldewide new Cases</h3>
              <LineGraph/>

            </CardContent>
      </Card>
    </div>
  );
}

export default App;
