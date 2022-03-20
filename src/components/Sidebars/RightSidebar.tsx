import styled from 'styled-components';
import { FiMapPin, FiGrid, FiTag, FiSettings } from 'react-icons/fi';

const RightSidebar = () => {
  return (
    <SidebarBox>
      <header>
        <h2>oihana</h2>
      </header>

      <nav>
        <ul>
          <li>
            <a href='/map-page'>
              <FiMapPin />
              Ver no mapa
            </a>
          </li>
          <li>
            <a href='/'>
              <FiGrid />
              Ver Feed
            </a>
          </li>
          <li>
            <a href=''>
              <FiTag />
              Publicar
            </a>
          </li>

          <li>
            <a href=''>
              <FiSettings />
              Definições
            </a>
          </li>
        </ul>
      </nav>
    </SidebarBox>
  );
};

const SidebarBox = styled.aside`
  height: 100%;
  padding: 32px 24px;
  /* From https://css.glass */
  background: rgba(6, 70, 99, 0.16);
  border-radius: 16px;
  backdrop-filter: blur(2.1px);
  -webkit-backdrop-filter: blur(2.1px);
`;

export default RightSidebar;
