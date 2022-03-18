import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import MapFilter from '../components/MapFilter';
import { AsideWrapper, Container } from '../styles';

const Map = dynamic(() => import('../components/Map'), { ssr: false });

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <>
          <Container>
            <Map />
          </Container>
          <AsideWrapper>
            <MapFilter />
          </AsideWrapper>
        </>
      </Layout>
    </>
  );
};

export default Home;
