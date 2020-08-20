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
];

type Props = {
  activeNum: number;
};

const NavHome = (props: Props) => {
  // Props
  const {activeNum} = props;

  // State
  const [search, onChangeSearch] = useState('');
  const [showMenu, onShowMenu] = useState(false);

  // Function
  const setChangeSearch = (value: any) => {
    const result = value.target.value;
    onChangeSearch(result);
  };

  const setMenu = () => {
    const value = showMenu;
    onShowMenu(!value);
  };

  const MyMenu = menu.map((e) => (
    <a
      key={e.id}
      href={e.nav}
      className={`block mt-4 lg:inline-block ${
        activeNum === e.id - 1 ? 'text-black' : 'text-gray-500'
      } lg:mt-0 hover:text-blue-500 mr-4`}>
      {e.title}
    </a>
  ));

  return (
    <nav className="border-b-2 border-blue-500 bg-white">
      <div className="container mx-auto flex items-center justify-between flex-wrap py-6 px-3">
        <div className="flex items-center flex-shrink-0 mr-6">
          <span className="font-semibold text-3xl tracking-tight">Artikel</span>
        </div>
        <div className="block lg:hidden">
          <button onClick={setMenu} className="flex items-center">
            <i
              className={`fas fa-${
                !showMenu ? 'bars' : 'times'
              } text-blue-500 text-3xl`}
            />
          </button>
        </div>
        <div
          className={`w-full ${
            showMenu ? 'block' : 'hidden'
          } flex-grow lg:flex lg:items-center lg:w-auto`}>
          <div className="text-sm lg:flex-grow">
            <input
              className="border-b focus:border-blue-500 focus:bg-opacity-25 appearance-none text-gray-700 lg:ml-3 leading-tight focus:outline-none py-2 px-3 mr-3 bg-gray-300 rounded"
              type="text"
              placeholder="covid-19"
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
