import Link from 'next/link';
import Button from './Button';
import {useState} from 'react';

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
  // Props
  const {activeNum} = props;

  // State
  const [search, onChangeSearch] = useState('');

  // Function
  const setChangeSearch = (value: any) => {
    const result = value.target.value;
    onChangeSearch(result);
  };

  // Local Component
  const MyMenu = menu.map((e) => (
    <Link key={e.id} href={e.nav}>
      <a
        className={`block mt-4 lg:inline-block ${
          activeNum === e.id - 1 ? 'text-black' : 'text-gray-500'
        } lg:mt-0 hover:text-blue-500 mr-4`}>
        {e.title}
      </a>
    </Link>
  ));

  return (
    <nav className="border-b-2 border-blue-500">
      <div className="container mx-auto flex items-center justify-between flex-wrap py-6">
        <div className="flex items-center flex-shrink-0 mr-6">
          <span className="font-semibold text-3xl tracking-tight">Artikel</span>
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
          <div className="text-sm lg:flex-grow">
            <input
              className="border-b focus:border-blue-500 focus:bg-opacity-25 appearance-none text-gray-700 ml-3 leading-tight focus:outline-none py-2 px-3 mr-3 bg-gray-300 rounded"
              type="text"
              placeholder="Mamank..."
              value={search}
              onChange={setChangeSearch.bind(this)}
            />
            {search.length > 3 && (
              <Button title="Search" onClick={() => alert(search)} />
            )}
          </div>
          <div>
            {MyMenu}
            <Button title="Sign In" onClick={() => alert('Mmank')} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavHome;
