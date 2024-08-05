import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./App.css";
import { useState } from "react";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState({});

  const ApiKEY = "21e5670b2d34284f80e8fc9863558fb8";

  const API = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${ApiKEY}&units=metric`;

  const ApiCall = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setLocation(data);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    ApiCall();
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>

      <WeatherCard/>
    </div>
  );
};

export default App;
