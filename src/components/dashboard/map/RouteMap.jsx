import React, { useRef, useEffect } from "react";

import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function RouteMap({ sessionId }) {
	let geologicalInfoData;
	const mapContainer = useRef(null);
	const map = useRef(null);
	const API_KEY = "OZkqnFxcrUbHDpJQ5a3K";

	useEffect(() => {
		if (map.current) {
			return () => {}; //Causes the map not too render multiple times :)
		}

		map.current = new maplibregl.Map({
			container: mapContainer.current,
			style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
			zoom: 10,
			minZoom: 1,
			maxZoom: 16,
		});

		getMarkerData(sessionId);

		return () => {
			// Cleanup logic here
		};
	}, [API_KEY, geologicalInfoData]);

	function renderMarkers() {
		const coordinateLines = [];
		geologicalInfoData.forEach((geologicalInfo, index) => {
			const el = document.createElement("div");
			el.className = "marker bg-brandBlack w-3 h-3 rounded-full hover:marker-maproute-onhover";

			el.addEventListener("mouseover", () => (el.textContent = index + 1));
			el.addEventListener("mouseleave", () => (el.textContent = ""));

			el.addEventListener("click", (event) => {
				updateRouteMapSidebar(geologicalInfo, event);
			});

			new maplibregl.Marker({ element: el })
				.setLngLat([geologicalInfo.longitude, geologicalInfo.latitude])
				.addTo(map.current);

			coordinateLines.push([geologicalInfo.longitude, geologicalInfo.latitude]);
		});

		map.current.on("load", () => {
			map.current.addSource("route", {
				type: "geojson",
				data: {
					type: "Feature",
					geometry: {
						type: "LineString",
						coordinates: coordinateLines,
					},
				},
			});
			map.current.addLayer({
				id: "route",
				type: "line",
				source: "route",
				paint: {
					"line-color": "#888",
					"line-width": 1,
				},
			});
		});

		updateRouteMapSidebar(geologicalInfoData[0]);
	}

	function updateRouteMapSidebar(geologicalInfo, event) {
		updateTimestamp(geologicalInfo.timestamp);
		updateLatitude(geologicalInfo.latitude);
		updateLongitude(geologicalInfo.longitude);
		updateAltitude(geologicalInfo.altitude);
		updateTemperature(geologicalInfo.temperature);
		updateHumidity(geologicalInfo.humidity);
		updatePressure(geologicalInfo.pressure);
		updateLight(geologicalInfo.light);
		updateWindSpeed(geologicalInfo.windSpeed);
		updateWindDirection(geologicalInfo.windDirection);
		updateRadiation(geologicalInfo.radiation);

		resetAllClickedElements();

		const clickedElement = event || undefined;
		if (clickedElement !== undefined) {
			clickedElement.target.style.backgroundColor = "#E74C3C";
			clickedElement.target.classList.remove("bg-brandTeal");
		}
	}

	function updateTimestamp(timestamp) {
		document.querySelector("#timestamp").textContent = new Date(timestamp).toLocaleTimeString("en-GB");
	}

	function updateLatitude(latitude) {
		document.querySelector("#latitude").textContent = latitude.toFixed(3);
	}

	function updateLongitude(longitude) {
		document.querySelector("#longitude").textContent = longitude.toFixed(3);
	}

	function updateAltitude(altitude) {
		document.querySelector("#altitude").textContent = altitude;
	}

	function updateTemperature(temperature) {
		document.querySelector("#temperature").textContent = Math.round(temperature);
	}

	function updateHumidity(humidity) {
		document.querySelector("#humidity").textContent = humidity;
	}

	function updatePressure(pressure) {
		document.querySelector("#pressure").textContent = pressure.toFixed(3);
	}

	function updateLight(light) {
		document.querySelector("#light").textContent = light.toFixed(3);
	}

	function updateWindSpeed(windSpeed) {
		document.querySelector("#windspeed").textContent = windSpeed.toFixed(0);
	}

	function updateWindDirection(windDirection) {
		document.querySelector("#windDirection").textContent = windDirection;
	}

	function updateRadiation(radiation) {
		document.querySelector("#radiation").textContent = radiation.toFixed(3);
	}

	function resetAllClickedElements() {
		document.querySelectorAll(".marker").forEach((marker) => {
			marker.style.backgroundColor = "#54696c";
		});
	}

	async function getMarkerData(sessionId) {
		const { flyData } = await fetch(
			`https://project-2.ti.howest.be/2023-2024/group-17/api/geologicalinfo/${sessionId}`,
		).then((data) => data.json());
		geologicalInfoData = flyData;

		if (geologicalInfoData.length > 0) {
			const firstItem = geologicalInfoData[0];
			map.current.setCenter([firstItem.longitude, firstItem.latitude]);
		}

		renderMarkers();
	}

	return (
		<div className="relative w-full h-full">
			<div ref={mapContainer} className="map absolute w-full h-full" />
		</div>
	);
}
