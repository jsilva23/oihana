import {
  MdBusiness,
  MdOutlineBathtub,
  MdOutlineBedroomParent,
} from 'react-icons/md';
import styled from 'styled-components';
import AddCard from '../Adds';
import NextToYou from '../FeedPost/NextToYou';

const RightSidebar = () => {
  return (
    <SidebarBox>
      <AddCard />

      <div className='next-to-you'>
        <h2>Mais proximo de ti</h2>

        <NextToYou />
        <NextToYou />
        <NextToYou />
      </div>
    </SidebarBox>
  );
};

const SidebarBox = styled.aside`
  position: fixed;
  width: 450px;
  height: 85vh;

  .next-to-you {
    border-top: 1px solid rgba(0, 0, 0, 0.5);
    margin-top: 20px;
    padding: 35px 0;

    h2 {
      font-size: 1.8rem;
      margin-bottom: 30px;
    }
  }
`;

export default RightSidebar;
