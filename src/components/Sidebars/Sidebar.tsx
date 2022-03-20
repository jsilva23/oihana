import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiMapPin, FiGrid, FiSettings, FiUser } from 'react-icons/fi';

const Sidebar = () => {
  const router = useRouter();

  return (
    <StylesSidebar>
      <nav>
        <ul className='main-nav'>
          <li className={router.pathname == '/' ? 'active' : ''}>
            <Link href='/'>
              <a>
                <FiGrid size={35} />
              </a>
            </Link>
          </li>
          <li className={router.pathname == '/map-page' ? 'active' : ''}>
            <Link href='/map-page'>
              <a>
                <FiMapPin size={35} />
              </a>
            </Link>
          </li>
          <li className={router.pathname == '/user-profile' ? 'active' : ''}>
            <Link href='/user-profile'>
              <a>
                <FiUser size={35} />
              </a>
            </Link>
          </li>
        </ul>
        <ul className='settings'>
          <li className={router.pathname == '/settings' ? 'active' : ''}>
            <Link href='/settings'>
              <a>
                <FiSettings size={25} />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </StylesSidebar>
  );
};

const StylesSidebar = styled.aside`
  height: 100%;
  padding: 32px 24px;

  background: #04293adf;
  border-radius: 16px;

  nav {
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    ul {
      list-style: none;

      a {
        color: #ddd;
      }

      .active {
        a {
          color: #ecb365;
        }
      }
    }

    .main-nav {
      display: flex;
      flex-direction: column;
      align-items: center;

      li {
        margin-bottom: 20px;

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .settings {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default Sidebar;
