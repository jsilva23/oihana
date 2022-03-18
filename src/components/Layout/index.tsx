import { Wrapper } from '../../styles';
import Sidebar from '../Sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Sidebar />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Layout;
