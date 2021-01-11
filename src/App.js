
import './App.css';
import {
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core"



function App() {
  return (
    <div className="app">
       <h1>COVID-19 TRACKER</h1>
       <div className="app__header">

       </div>
      <FormControl className="app__dropdown">
          <Select
          variant="outlined"
          value="abc"
          >
          <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">bla</MenuItem>
          <MenuItem value="worldwide">ab</MenuItem>
          <MenuItem value="worldwide">abl</MenuItem>
          </Select>
      </FormControl>
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
