import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import LayoutMap from '../components/Layout/LayoutMap';

const Map = dynamic(() => import('../components/Map'), { ssr: false });

const MapPage: NextPage = () => {
  return (
    <>
      <LayoutMap>
        <Map />
      </LayoutMap>
    </>
  );
};

export default MapPage;
