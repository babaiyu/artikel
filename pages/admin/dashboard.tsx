import {useSelector} from 'react-redux';
import {AppState} from 'storage/reducer';

const Dashboard = () => {
  // Props
  const state = useSelector((state: AppState) => state.user);

  // Render
  return <p>Selamat datang di Admin {JSON.stringify(state)}</p>;
};

export default Dashboard;
