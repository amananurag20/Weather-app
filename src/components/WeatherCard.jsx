import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

const WeatherCard = ({ location }) => {
  const imgSrc=location.main.temp<30?"https://media.istockphoto.com/id/1472560341/photo/majestic-dark-cloud-and-sky.jpg?s=2048x2048&w=is&k=20&c=EOFRtOBxkp7bbiphbFkd7LUdu6XQv7551Tz3rGkXPeM=":"https://media.istockphoto.com/id/813720840/photo/summer-heat-wave-in-the-city.jpg?s=2048x2048&w=is&k=20&c=GFLYF-pRw41qTUwGyU4V1J1qcI0ilFkKx0zuDPd_uqE="
  return (
    <div className="weather-container">
      <Card sx={{ width:360 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={imgSrc}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {location.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div>Temperature: {location.main.temp}</div>
            <div>Min_Temp: {location.main.temp_min}</div>
            <div>Max_Temp: {location.main.temp_max}</div>
            <div>The temperatures of  {location.name} feels like {location.main.feels_like}</div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherCard;
