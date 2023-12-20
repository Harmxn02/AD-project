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
        if(map.current) return null;
        
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
        geologicalInfoData.forEach((geologicalInfo, index) => {
            const el = document.createElement('div');
            el.className = 'marker bg-brandCyan border-2 border-white text-white w-8 h-8 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-brandTeal hover:z-50';
            el.textContent = index;

            el.addEventListener('click', () => {
                updateRouteMapSidebar(geologicalInfo);
            });

            new maplibregl.Marker({element: el})
                .setLngLat([geologicalInfo.longitude,geologicalInfo.latitude])
                .addTo(map.current);
        })
    }

    function updateRouteMapSidebar(geologicalInfo) {
        const {timestamp, latitude, longitude, altitude, temperature, humidity, pressure, light, windSpeed, windDirection, radiation} = geologicalInfo;

        console.log("TO BE IMPLEMENTED IN COUPLE HOURS :D")
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
