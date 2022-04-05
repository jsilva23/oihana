import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID;

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    />
  );
};

const Map = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{
        height: '85vh',
        width: '100%',
        maxWidth: '1210px',
        borderRadius: '16px',
        position: 'fixed',
      }}
    >
      <CustomTileLayer />

      <Marker key={`place-1`} position={[51.505, -0.09]} title={'text-place'} />
    </MapContainer>
  );
};

export default Map;
