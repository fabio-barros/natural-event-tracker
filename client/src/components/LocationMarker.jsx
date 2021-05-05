import {Icon} from "@iconify/react"


import "../styles/css/LocationMarker.css"
const LocationMarker = ({lat, lng, onClick, icon, color}) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={icon} className="location-icon" style={{color: color}}/>
        </div>
    )
}

export default LocationMarker
