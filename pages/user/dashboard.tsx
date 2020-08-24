import {useSelector} from 'react-redux';
import {AppState} from 'storage/reducer';
import {LayoutAdmin} from 'components';

const Dashboard = () => {
  // Props
  const state = useSelector((state: AppState) => state.user);

  // Render
  return (
    <LayoutAdmin title="Dashboard" activeNum={0}>
      <section>
        <div className="py-2 px-3 border rounded">
          <h1 className="text-xl">Analitik</h1>
        </div>
      </section>
    </LayoutAdmin>
  );
};

export default Dashboard;
