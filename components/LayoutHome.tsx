import React, {ReactNode} from 'react';
import Head from 'next/head';
import NavHome from './NavHome';

type Props = {
  children?: ReactNode;
  title?: string;
  activeNum: number;
};

const LayoutHome = ({children, title, activeNum = 0}: Props) => {
  return (
    <div>
      <Head>
        <title>Artikel | {title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="sticky top-0">
        <NavHome activeNum={activeNum} />
      </header>
      {children}
    </div>
  );
};

export default LayoutHome;
