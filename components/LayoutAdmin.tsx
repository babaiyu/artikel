import {ReactNode, useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRouter} from 'next/router';
import Sidebar from './Sidebar';
import MyHead from './MyHead';
import {userLogoutAction} from 'storage/user/user.action';
import {ModalLogout} from './Modal';
import {AppState} from 'storage/reducer';

type Props = {
  children?: ReactNode;
  title?: string;
  activeNum: number;
};

const LayoutAdmin = ({children, title, activeNum = 0}: Props) => {
  // Props
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoggedIn = useSelector((state: AppState) => state.user.isLoggedIn);

  // State
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [modalLogOut, setModalLogOut] = useState(false);

  // Life Cycle
  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/signin');
    }
  }, [isLoggedIn]);

  // Modal Function
  const showModalLogOut = () => {
    setModalLogOut(true);
  };
  const hideModalLogOut = () => {
    setModalLogOut(false);
  };

  // Function
  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const onLogOut = () => {
    const logout = userLogoutAction();
    dispatch(logout);
    setTimeout(() => {
      hideModalLogOut();
      router.replace('/signin');
    }, 1000);
  };

  const handleToggleSidebar = (checked: boolean) => {
    setToggled(checked);
  };

  // Render
  return (
    <html>
      <MyHead title={title} />
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
              <button onClick={showModalLogOut}>
                <i className="fa fa-power-off text-xl hover:text-red-500" />
              </button>
            </div>
            <hr className="my-3" />
            {children}
          </div>
          <ModalLogout
            show={modalLogOut}
            onCloseModal={hideModalLogOut}
            onOK={onLogOut}
          />
        </div>
      </body>
    </html>
  );
};

export default LayoutAdmin;
