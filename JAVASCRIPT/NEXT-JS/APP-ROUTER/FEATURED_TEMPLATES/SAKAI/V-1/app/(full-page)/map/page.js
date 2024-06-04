'use client'

import React, { useState, useEffect } from 'react'

import { GoogleMapComponent } from '@/components';

const Map = () => {
    const [currentLatitude, setCurrentLatitude] = useState(0);
    const [currentLongitude, setCurrentLongitude] = useState(0);
    useEffect(() => {
        getLocation();
    }, []);
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCurrentLatitude(latitude);
                    setCurrentLongitude(longitude);
                },
                (error) => {
                    console.error(error.message);
                }
            );
        } else {
            console.error("Geolocation is not supported by your browser.");
        }
    };
    return (
        <div>
            <GoogleMapComponent
                initialPosition={{
                    lat: currentLatitude,
                    lng: currentLongitude,
                }}
            />
        </div>
    )
}

export default Map;