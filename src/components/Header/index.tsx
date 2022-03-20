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
            <h1>OIHANA</h1>
          </div>

          <nav>
            <ul>
              <li>
                <a href='/'>
                  <MdSell size={25} />
                  <span>Publicar</span>
                </a>
              </li>

              <li>
                <a href='/map-page'>
                  <FaRegHandshake size={25} />
                  <span>Negociações</span>
                </a>
              </li>

              <li>
                <a href=''>
                  <MdNotifications size={25} />
                  <span>Notificações</span>
                </a>
              </li>

              <li>
                <a href=''>
                  <MdHelp size={25} />
                  <span>Ajuda</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  height: 10vh;
  width: 100%;
  margin-bottom: 30px;
  background: rgba(6, 70, 99);

  display: flex;
  align-items: center;

  .logo {
    h1 {
      font-family: 'Yellowtail', cursive;
      font-size: 3.6rem;
      color: #ddd;
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
        margin-left: 25px;
        a {
          text-decoration: none;
          color: #ddd;
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
