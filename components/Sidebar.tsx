import Link from 'next/link';
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  Menu,
  MenuItem,
} from 'react-pro-sidebar';
import {listMenuAdmin} from 'helpers/dummy';

const Sidebar = ({
  collapsed,
  toggled,
  handleToggle,
  handleCollapse,
  active,
}) => {
  return (
    <ProSidebar collapsed={collapsed} toggled={toggled} onToggle={handleToggle}>
      <SidebarHeader className="text-center">
        <h1 className="text-xl">Dashboard</h1>
        <button onClick={handleCollapse}>Col</button>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          {listMenuAdmin.map((e, i) => (
            <Link key={e.id} href={e.target}>
              <MenuItem active={i === active ? true : false}>
                {e.title}
              </MenuItem>
            </Link>
          ))}
        </Menu>
      </SidebarContent>
      <SidebarFooter className="flex flex-row py-3 items-center px-3">
        <img
          className="rounded-full h-12 w-12 object-cover mr-3 hover:shadow-md"
          alt="img_profile"
          src="https://pbs.twimg.com/media/EUz5qgbUYAEKqdF.jpg"
        />
        <div className={`${collapsed ? 'hidden' : 'flex flex-col'}`}>
          <a href="" className="hover:underline">
            Bayu Permana
          </a>
          <small>Frontend Developer</small>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
