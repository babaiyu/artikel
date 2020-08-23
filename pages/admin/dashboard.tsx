import {useSelector} from 'react-redux';
import {AppState} from 'storage/reducer';
import {LayoutAdmin} from 'components';

const Dashboard = () => {
  // Props
  const state = useSelector((state: AppState) => state.user);

  // Render
  return (
    <LayoutAdmin title="Dashboard" activeNum={0}>
      <p>Halo, ini Dashboard</p>
    </LayoutAdmin>
  );
};

export default Dashboard;
