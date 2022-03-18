import styled from 'styled-components';
import { FiMapPin, FiGrid, FiTag, FiSettings } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <StylesSidebar>
      <header>
        <h2>oihana</h2>
      </header>

      <nav>
        <ul>
          <li>
            <a href=''>
              <FiMapPin />
              Ver no mapa
            </a>
          </li>
          <li>
            <a href=''>
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
    </StylesSidebar>
  );
};

const StylesSidebar = styled.aside`
  position: fixed;
  height: 100%;
  width: 250px;
  padding: 32px 24px;
  background: #011220;
`;

export default Sidebar;
