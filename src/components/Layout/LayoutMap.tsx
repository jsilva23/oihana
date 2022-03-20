import Sidebar from '../Sidebars/Sidebar';
import { Container } from '../../styles';
import Header from '../Header';

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutMap = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container>
        <div className='row-map'>
          <div className='col'>
            <Sidebar />
          </div>
          <div className='col'>{children}</div>
        </div>
      </Container>
    </>
  );
};

export default LayoutMap;
