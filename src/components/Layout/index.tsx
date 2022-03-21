import Sidebar from '../Sidebars/Sidebar';
import { Container } from '../../styles';
import RightSidebar from '../Sidebars/RightSidebar';
import Header from '../Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container>
        <div className='row'>
          <div className='col'>
            <Sidebar />
          </div>
          <div className='col'>{children}</div>
          <div className='col'>
            <RightSidebar />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Layout;
