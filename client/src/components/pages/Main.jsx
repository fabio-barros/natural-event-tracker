import Map from "../Map";
import Loader from "../Loader"
import { useState, useEffect } from "react";
import axios from "axios";
const Main = () => {
    const [eventData, seteventData] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect((params) => {
        const fetchEvents = async () => {
            setLoading(true);
            const res = await axios.get(
                "https://eonet.sci.gsfc.nasa.gov/api/v3/events"
            );
            const { events } = await res.data;
            seteventData(events);
            setLoading(false);
        };

        fetchEvents();
    }, []);
    return (
        <div>
            {!loading ? <Map eventData={eventData} /> : <Loader/>}
        </div>
    );
};

export default Main;
