import React, {
    useRef,
    useEffect
} from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const lng = 139.753;
    const lat = 35.6844;
    const zoom = 7;
    const API_KEY = "OZkqnFxcrUbHDpJQ5a3K";

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
            center: [lng, lat],
            zoom: zoom,
            minZoom: 1,
            maxZoom: 16,
        });

        renderMarkers();

    }, [API_KEY, lng, lat, zoom]);

    async function renderMarkers() {
        const { sessions } = await fetch("https://project-2.ti.howest.be/2023-2024/group-17/api/sessions/1").then(data => data.json());
        console.log(sessions)
    }

    return (
        <div className="map-wrap relative w-full h-full">
            <div ref={mapContainer} className="map absolute w-full h-full" />
        </div>
    );
}
