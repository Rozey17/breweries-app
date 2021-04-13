import { useRef, useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ViewState } from 'react-map-gl/src/mapbox/mapbox';

export {};
interface IProps {}

export default function Map({}: IProps) {
  const mapRef = useRef<ReactMapGL | null>(null);
  const [viewport, setViewport] = useState<ViewState>({
    latitude: 43,
    longitude: -79,
    zoom: 10,
  });

  return (
    <div className='text-black relative'>
      <ReactMapGL
        {...viewport}
        width='100%'
        height='calc(100vh - 64px)'
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        ref={(instance) => (mapRef.current = instance)}
        minZoom={5}
        maxZoom={15}
        mapStyle='mapbox://styles/leighhalliday/ckhjaksxg0x2v19s1ovps41ef'
      ></ReactMapGL>
    </div>
  );
}
