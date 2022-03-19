import type { NextPage } from 'next';
import HomeFeed from '../components/HomeFeed';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <HomeFeed />
      </Layout>
    </>
  );
};

export default Home;
