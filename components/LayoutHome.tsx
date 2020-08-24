import React, {ReactNode} from 'react';
import NavHome from './NavHome';
import MyHead from './MyHead';

type Props = {
  children?: ReactNode;
  title?: string;
  activeNum: number;
};

const LayoutHome = ({children, title, activeNum = 0}: Props) => {
  return (
    <div>
      <MyHead title={title} />
      <header className="sticky top-0">
        <NavHome activeNum={activeNum} />
      </header>
      {children}
    </div>
  );
};

export default LayoutHome;
