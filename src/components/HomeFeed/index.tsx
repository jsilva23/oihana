import styled from 'styled-components';
import FeedPost from '../FeedPost';
import Search from '../Search';
import RightSidebar from '../Sidebars/RightSidebar';

const HomeFeed = () => {
  return (
    <FeedBox>
      <div className='posts'>
        <Search />
        <FeedPost />
        <FeedPost />
        <FeedPost />
        <FeedPost />
        <FeedPost />
      </div>

      <div className='adds'>
        <RightSidebar />
      </div>
    </FeedBox>
  );
};

const FeedBox = styled.section`
  position: relative;

  display: grid;
  grid-gap: 25px;
  grid-template-columns: auto 450px;
  grid-template-rows: auto;
  grid-template-areas: 'sidebar main';
`;

export default HomeFeed;
