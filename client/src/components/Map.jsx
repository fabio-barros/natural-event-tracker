import LocationMarker from "./LocationMarker";
import Info from "./Info";
import GoogleMapReact from "google-map-react";
import { useState } from "react";
import fireIcon from "@iconify/icons-mdi/fire-alert";
import stormIcon from "@iconify/icons-mdi/weather-lightning";
import flashIcon from "@iconify/icons-mdi/flash-alert-outline";
import volcanoIcon from "@iconify-icons/noto-v1/volcano";

import "../styles/css/Map.css";
const Map = ({ center, zoom, eventData, mapTypeId }) => {

    const [info, setInfo] = useState(null);

    const handler = (id, title) => {
        setInfo({ id: id, title: title });
    };

    const markers = eventData.map((event) => {
        const eventId = event.categories[0].id;
        let lat = null;
        let lng = null;
        if (eventId === "wildfires") {
            lat = event.geometry[0].coordinates[1];
            lng = event.geometry[0].coordinates[0];
            console.log(`lat ${lat}  lng ${lng}`);
            return (
                <LocationMarker
                    lat={lat}
                    lng={lng}
                    icon={fireIcon}
                    color={"#e25822"}
                    onClick={ ()=> handler(event.id, event.title)}
                />
            );
        } else if (eventId === "severeStorms") {
            const vai = [];
            let check = false;
            event.geometry.forEach((storm) => {
                const size = Object.keys(event.geometry).length;
                // console.log(storm);
                // console.log(event.geometry)
                lat = storm.coordinates[1];
                lng = storm.coordinates[0];
                console.log(`lat ${lat}  lng ${lng}`);

                if (check === false) {
                    console.log();
                    vai.push(
                        <LocationMarker
                            lat={lat}
                            lng={lng}
                            icon={stormIcon}
                            color={" #034aec"}
                            onClick={()=> handler(event.id, event.title)}
                        />
                    );
                    check = true;
                } else {
                    vai.push(
                        <LocationMarker
                            lat={lat}
                            lng={lng}
                            icon={flashIcon}
                            color={" #747880"}
                            onClick={()=> handler(event.id, event.title)}
                        />
                    );
                }
            });
            check = false;
            return vai;
        } else if (eventId === "volcanoes") {
            lat = event.geometry[0].coordinates[1];
            lng = event.geometry[0].coordinates[0];
            console.log(`lat ${lat}  lng ${lng}`);
            if (lat != undefined) {
                return (
                    <LocationMarker
                        lat={lat}
                        lng={lng}
                        icon={volcanoIcon}
                        color={"#A6744A"}
                        onClick={()=> handler(event.id, event.title)}
                    />
                );
            }
        } else return null;
    });

    return (
        <div id="map" className="map">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_MAPS_KEY,
                }}
                defaultCenter={center}
                defaultZoom={zoom}
                options={
                    {
                        minZoom: 3,
                        // streetViewControl: false,
                        // scaleControl: true,
                        // fullscreenControl: true,
                        styles: [{
                            // featureType: "poi.business",
                            elementType: "labels",
                            stylers: [{
                                visibility: "on"
                            }]
                        }],
                        zoomControl: true,
                        // gestureHandling: "greedy",
                        // disableDoubleClickZoom: true,
                        // minZoom: 11,
                        // maxZoom: 18,
                        mapTypeControl: true,
                        mapTypeId: "terrain",
                        mapTypeControlOptions: {
                            // style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
                            // position: maps.ControlPosition.BOTTOM_CENTER,
                            mapTypeIds: [
                                // maps.MapTypeId.ROADMAP,
                                // maps.MapTypeId.SATELLITE,
                                // maps.MapTypeId.HYBRID
                            ]
                        }}
                }
                
                
            >
                {markers}
            </GoogleMapReact>
            {info && <Info info={info} />}
        </div>
    );
};

Map.defaultProps = {
    center: {
        lat: -16.6799,
        lng: -49.255,
    },
    zoom: 1,
    
};

export default Map;
