import {ReactNode, useState} from 'react';
import Head from 'next/head';
import Sidebar from './Sidebar';

type Props = {
  children?: ReactNode;
  title?: string;
  activeNum: number;
};

const LayoutAdmin = ({children, title, activeNum = 0}: Props) => {
  // State
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  // Function
  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleSidebar = (checked: boolean) => {
    setToggled(checked);
  };

  // Render
  return (
    <html>
      <Head>
        <title>Artikel | {title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <div className="flex h-screen">
          <div className="flex flex-row justify-start items-start">
            <Sidebar
              collapsed={collapsed}
              toggled={toggled}
              handleToggle={handleToggleSidebar}
              active={activeNum}
            />
            <button className="p-3" onClick={handleCollapsedChange}>
              <i className="fas fa-bars text-xl hover:text-gray-600" />
            </button>
          </div>
          <div className="flex-1 py-3 px-5 overflow-y-auto h-screen">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-xl">{title}</h1>
              <button>
                <i className="fa fa-power-off text-xl hover:text-red-500" />
              </button>
            </div>
            <hr className="my-3" />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
};

export default LayoutAdmin;
