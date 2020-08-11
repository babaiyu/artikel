const menu = [
  {
    id: 1,
    title: 'Beranda',
    nav: '/',
  },
  {
    id: 2,
    title: 'Tentang',
    nav: '/about',
  },
  {
    id: 3,
    title: 'Harga',
    nav: '/pricing',
  },
];

type Props = {
  activeNum: number;
};

const NavHome = (props: Props) => {
  const {activeNum} = props;
  const MyMenu = menu.map((e) => (
    <a
      key={e.id}
      href="#responsive-header"
      className={`block mt-4 lg:inline-block ${
        activeNum === e.id - 1 ? 'text-black' : 'text-gray-500'
      } lg:mt-0 hover:text-blue-500 mr-4`}>
      {e.title}
    </a>
  ));

  return (
    <nav className="container mx-auto">
      <div className="flex items-center justify-between flex-wrap p-6 border-b-2 border-blue-500">
        <div className="flex items-center flex-shrink-0 mr-6">
          <span className="font-semibold text-xl tracking-tight">Artikel</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">{MyMenu}</div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavHome;
