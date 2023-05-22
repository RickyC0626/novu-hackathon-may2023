"use client";
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export default function MapboxGL() {
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-73.93);
  const [lat, setLat] = useState(40.73);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return;

    map.current.on("move", () => {
      setLng(Number(map.current!.getCenter().lng.toFixed(4)));
      setLat(Number(map.current!.getCenter().lat.toFixed(4)));
      setZoom(Number(map.current!.getZoom().toFixed(2)));
    });
  });

  return (
    <div>
      <div
        className="
          bg-gray-800/90 text-white py-2 px-3 absolute top-0 left-0 m-3
          rounded-md z-10 grid
        "
      >
        <div className="grid grid-cols-2 gap-4">
          <span>Longitude:</span>
          <span>{lng}</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <span>Latitude:</span>
          <span>{lat}</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <span>Zoom:</span>
          <span>{zoom}</span>
        </div>
      </div>
      <div ref={mapContainer} className="h-screen"/>
    </div>
  );
}
