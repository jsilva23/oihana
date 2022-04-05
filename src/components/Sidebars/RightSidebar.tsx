import styled from 'styled-components';

const RightSidebar = () => {
  return <SidebarBox></SidebarBox>;
};

const SidebarBox = styled.aside`
  position: fixed;
  width: 450px;
  height: 85vh;
  padding: 32px 24px;

  /* From https://css.glass */
  background: #e5edf3;
  backdrop-filter: blur(2.1px);
  -webkit-backdrop-filter: blur(2.1px);
  border-radius: 10px;
`;

export default RightSidebar;
