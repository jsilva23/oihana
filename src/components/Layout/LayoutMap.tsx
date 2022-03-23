import { MdFilterList } from 'react-icons/md';
import Sidebar from '../Sidebars/Sidebar';
import { Container } from '../../styles';
import Header from '../Header';
import { useState } from 'react';
import MapFilter from '../MapFilter';

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutMap = ({ children }: LayoutProps) => {
  const [mapFilterStatus, setMapFilterStatus] = useState<boolean>(false);

  return (
    <>
      <Header />
      <Container>
        <div className='row-map'>
          <div className='col'>
            <Sidebar />
          </div>
          <div className='col'>
            <span
              className='show__map-filter'
              onClick={() => setMapFilterStatus(true)}
            >
              <MdFilterList />
              <span>Filtrar</span>
            </span>
            {children}
            <MapFilter
              mapFilterStatus={mapFilterStatus}
              setMapFilterStatus={setMapFilterStatus}
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default LayoutMap;
