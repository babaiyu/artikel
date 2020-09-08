import Link from 'next/link';
import _ from 'lodash';
import {useSelector} from 'react-redux';
import {AppState} from 'storage/reducer';
import {LayoutAdmin} from 'components';
import { useRouter } from 'next/router';

const Dashboard = () => {
  // Config
  const router = useRouter();

  // Props
  const state = useSelector((state: AppState) => state.user);

  // Render
  return (
    <LayoutAdmin title="Dashboard" activeNum={0}>
      <section className="flex flex-row">
        <Link href="/user/write/new">
          <button className="py-5 px-5 border rounded hover:bg-gray-400 hover:text-white">
            <i className="fas fa-plus" /> Tulis artikel baru
          </button>
        </Link>
        <div className="py-2 px-3 flex-1">
          <h1 className="text-xl">Analitik</h1>
        </div>
      </section>
    </LayoutAdmin>
  );
};

export default Dashboard;
