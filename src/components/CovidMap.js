import React from "react";
import {MapContainer , GeoJSON} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/components.css"

const CovidMap = ({countries}) => {

  const mapStyle={
    fillColor:"white",
    weight:1,
    color:"black",
    fillOpacity:1,
  };

  const onEachCountry = (country, layer)=>{
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    const confirmedText = country.properties.confirmedText;
    layer.bindPopup(`${name} ${confirmedText}`);

  };


  return (
    <MapContainer className={"Map"} zoom={2} center={[20, 10]}>
      <GeoJSON style={mapStyle} onEachFeature={onEachCountry} data={countries}/>
    </MapContainer >
  )
};

export default CovidMap;