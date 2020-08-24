import {useSelector} from 'react-redux';
import {AppState} from 'storage/reducer';
import {LayoutAdmin} from 'components';

const Bookmarks = () => {
  // Props
  const state = useSelector((state: AppState) => state.user);

  // Render
  return (
    <LayoutAdmin title="Tersimpan" activeNum={1}>
      <p>Halo, ini Bookmarks</p>
    </LayoutAdmin>
  );
};

export default Bookmarks;
