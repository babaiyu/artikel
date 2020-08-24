import {useSelector} from 'react-redux';
import {AppState} from 'storage/reducer';
import {LayoutAdmin} from 'components';

const Archive = () => {
  // Props
  const state = useSelector((state: AppState) => state.user);

  // Render
  return (
    <LayoutAdmin title="Arsip" activeNum={1}>
      <p>Halo, ini Arsip</p>
    </LayoutAdmin>
  );
};

export default Archive;
