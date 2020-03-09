import React, { Component } from 'react'
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'

const GoogleMapInit = () => {
    return (
        <div className="container">
            <GoogleMap 
                defaultZoom={10} 
                defaultCenter={{lat: 45.421532, lng: -75.697189}} 
            />
        </div>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(GoogleMapInit))

const Map = () => {
    return (
        <div style={{width: '100%', height: '100vh'}} className="container">
            <WrappedMap 
                googleMapURL={
                    `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAqFwKNQmitkr08ves1IV-0EZw91lBVaMo`
                } 
                loadingElement={<div style={{height: '100%'}}/>}
                containerElement={<div style={{height: '100%'}}/>}
                mapElement={<div style={{height: '100%'}}/>}
            />
        </div>
    )
}

export default Map
