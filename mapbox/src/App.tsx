import { useRef, useEffect, useState } from "react"
import mapboxgl, { Map } from "mapbox-gl"

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

const App = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null)
  const map = useRef<Map | null>(null)
  const [lng, setLng] = useState(37.62)
  const [lat, setLat] = useState(55.75)
  const [zoom, setZoom] = useState(12)

  useEffect(() => {
    if (map.current) return
    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLDivElement,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom
    })
  })

  useEffect(() => {
    if (!map.current) return
    map.current.on("move", () => {
      map.current && setLng(map?.current?.getCenter().lng)
      map.current && setLat(map?.current?.getCenter().lat)
      map.current && setZoom(map?.current?.getZoom())
    })
  })
  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="mapContainer" />
    </div>
  )
}
export default App
