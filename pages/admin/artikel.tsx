import {useSelector} from 'react-redux';
import {AppState} from 'storage/reducer';
import {LayoutAdmin} from 'components';

const Artikel = () => {
  // Props
  const state = useSelector((state: AppState) => state.user);

  // Render
  return (
    <LayoutAdmin title="Artikel" activeNum={1}>
      <p>Halo, ini Artikel</p>
    </LayoutAdmin>
  );
};

export default Artikel;
