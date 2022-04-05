import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { MdFilterList } from 'react-icons/md';
import Layout from '../components/Layout';
import LayoutMap from '../components/Layout/LayoutMap';
import MapFilter from '../components/MapFilter';

const Map = dynamic(() => import('../components/Map'), { ssr: false });

const MapPage: NextPage = () => {
  const [mapFilterStatus, setMapFilterStatus] = useState<boolean>(false);
  return (
    <>
      <Layout>
        <span
          className='show__map-filter'
          onClick={() => setMapFilterStatus(true)}
        >
          <MdFilterList />
          <span>Filtrar</span>
        </span>
        <Map />
        <MapFilter
          mapFilterStatus={mapFilterStatus}
          setMapFilterStatus={setMapFilterStatus}
        />
      </Layout>
    </>
  );
};

export default MapPage;
