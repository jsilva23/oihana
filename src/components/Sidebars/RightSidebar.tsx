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
        <NextToYou />
      </div>
    </SidebarBox>
  );
};

const SidebarBox = styled.aside`
  position: fixed;
  width: 450px;
  height: 85vh;
  padding: 10px;

  background: #e5edf3;
  backdrop-filter: blur(2.1px);
  -webkit-backdrop-filter: blur(2.1px);
  border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;

  .next-to-you {
    border-top: 1px solid rgba(0, 0, 0, 0.5);
    margin-top: 10px;
    padding: 15px 0;

    h2 {
      font-size: 1.8rem;
      margin-bottom: 25px;
    }
  }
`;

export default RightSidebar;
