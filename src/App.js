
import './App.css';
import React ,{useState } from "react";
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';



function App() {
  const [longitude , setlongitude] = useState(35.702786)
  const [latitude , setlatitude] = useState(31.454620)


  
  return (
    <div className="App">
    <div className="sidebar">
      <input value={longitude} placeholder='longitude' type="text" onChange={(event)=> setlongitude(event.target.value)}/>
      <input value={latitude} placeholder='latitude' type="text" onChange={(event)=> setlatitude(event.target.value)}/>
    </div>

  <Map
      initialViewState={{
        longitude: longitude,
        latitude: latitude,
        zoom: 7,
       
      }}
      style={{width: window.innerWidth, height: window.innerHeight}}
      mapStyle="mapbox://styles/amit100/cl35se5hb00af14mmaeej4i78"
      mapboxAccessToken="pk.eyJ1IjoiYW1pdDEwMCIsImEiOiJjbDM1cXNzYW4xN2w3M2pwNTRpNmEwY2Z1In0.gL_YqqY8TmnM2SeP7J6WPQ"
     
    />
    </div>
  );
}

export default App;
