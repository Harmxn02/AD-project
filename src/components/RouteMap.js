import React, {
    useRef,
    useEffect
} from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function RouteMap() {
    let geologicalInfoData;
    const mapContainer = useRef(null);
    const map = useRef(null);
    const API_KEY = "OZkqnFxcrUbHDpJQ5a3K";

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
            center: [30, 31],
            zoom: 10,
            minZoom: 1,
            maxZoom: 16,
        });

        getMarkerData();

    }, [API_KEY, geologicalInfoData]);

    function renderMarkers() {
        geologicalInfoData.forEach(geologicalinfo => {
            new maplibregl.Marker({color: "#FF0000"})
                .setLngLat([geologicalinfo.longitude,geologicalinfo.latitude])
                .addTo(map.current);
        })
    }

    async function getMarkerData() {
        const { flyData } = await fetch("https://project-2.ti.howest.be/2023-2024/group-17/api/geologicalinfo/1").then(data => data.json());
        geologicalInfoData = flyData;

        if (geologicalInfoData.length > 0) {
            const firstItem = geologicalInfoData[0];
            map.current.setCenter([firstItem.longitude, firstItem.latitude]);
        }

        renderMarkers();
    }

    return (
        <div className="map-wrap relative w-full h-full">
            <div ref={mapContainer} className="map absolute w-full h-full" />
        </div>
    );
}
