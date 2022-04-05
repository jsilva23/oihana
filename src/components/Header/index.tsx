import Link from 'next/link';
import styled from 'styled-components';
import { FaRegHandshake } from 'react-icons/fa';
import { MdHelp, MdNotifications, MdSell } from 'react-icons/md';
import { Container } from '../../styles';

const Header = () => {
  return (
    <MainHeader>
      <Container>
        <div className='row-header'>
          <div className='logo'>
            <Link href='/'>
              <h1>OIHANA</h1>
            </Link>
          </div>

          <nav>
            <ul>
              <li>
                <Link href='/announce'>
                  <a>
                    <MdSell size={25} />
                    <span>Anunciar</span>
                  </a>
                </Link>
              </li>

              <li>
                <Link href='/negocitions'>
                  <a>
                    <FaRegHandshake size={25} />
                    <span>Negociações</span>
                  </a>
                </Link>
              </li>

              <li>
                <Link href='/notifications'>
                  <a>
                    <MdNotifications size={25} />
                    <span>Notificações</span>
                  </a>
                </Link>
              </li>

              <li>
                <Link href='/help'>
                  <a>
                    <MdHelp size={25} />
                    <span>Ajuda</span>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;

  height: 10vh;
  width: 100%;
  margin-bottom: 30px;
  background: rgba(6, 70, 99);

  display: flex;
  align-items: center;

  z-index: 999999;

  .logo {
    h1 {
      font-family: 'Yellowtail', cursive;
      font-size: 3.6rem;
      color: #f4faff;
    }
  }

  .row-header {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      ul {
        list-style: none;
      }
      li {
        display: inline-block;
        margin-left: 40px;
        a {
          text-decoration: none;
          color: #f4faff;
          line-height: 1.5;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          span {
            font-size: 1.6rem;
          }

          &:hover {
            color: #ecb365;
          }
        }
      }
    }
  }
`;

export default Header;
