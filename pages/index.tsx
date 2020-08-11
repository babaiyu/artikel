import {MyHead, NavHome} from '../components';

const App = (props) => {
  // Render
  return (
    <>
      <MyHead title="Home" />
      <NavHome activeNum={0} />
    </>
  );
};

export default App;
