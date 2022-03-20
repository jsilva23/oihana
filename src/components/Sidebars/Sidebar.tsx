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
            <a href='/map-page'>
              <FiMapPin />
            </a>
          </li>
          <li>
            <a href='/'>
              <FiGrid />
            </a>
          </li>
          <li>
            <a href=''>
              <FiTag />
            </a>
          </li>

          <li>
            <a href=''>
              <FiSettings />
            </a>
          </li>
        </ul>
      </nav>
    </StylesSidebar>
  );
};

const StylesSidebar = styled.aside`
  height: 100%;
  padding: 32px 24px;
  background: rgba(6, 70, 99);
  border-radius: 16px;
`;

export default Sidebar;
