import styled from 'styled-components';
import { FiMapPin, FiGrid, FiTag, FiSettings } from 'react-icons/fi';

const RightSidebar = () => {
  return (
    <SidebarBox>

    </SidebarBox>
  );
};

const SidebarBox = styled.aside`
  height: 100%;
  padding: 32px 24px;
  /* From https://css.glass */
  background: rgba(6, 70, 99, 0.16);
  backdrop-filter: blur(2.1px);
  -webkit-backdrop-filter: blur(2.1px);
`;

export default RightSidebar;
