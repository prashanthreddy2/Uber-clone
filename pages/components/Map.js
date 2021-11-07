import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiYXNpZmtoYW4wNDAxIiwiYSI6ImNrdm04d3J6eDA4bTEydm1udXF0M3VxazEifQ.5JS8d3-U7EgDL2USiRZ_4g';

const Map = (props) => {
  useEffect(() =>{
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [79.740,15.912],
      zoom: 3,
    })


    if(props.pickupCoordinates){
      addToMap(map,props.pickupCoordinates)
    }
    if(props.dropOffCoordinates){
      addToMap(map,props.dropOffCoordinates)
    }

    if(props.pickupCoordinates && props.dropOffCoordinates){
      map.fitBounds([
          props.pickupCoordinates,
          props.dropOffCoordinates
      ], {
        padding: 60
      })
    }

  },[props.pickupCoordinates, props.dropOffCoordinates])

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
  }

  return <Wrapper id="map"></Wrapper>
}

export default Map

const Wrapper = tw.div`
    flex-1 h-1/2
`

