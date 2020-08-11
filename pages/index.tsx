import Head from 'next/head';
import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppState} from 'storage/reducer';
import {exampleAction} from 'storage/example/example.action';

const App = () => {
  // Props
  const reduxExample = useSelector((state: AppState) => state.example);
  const dispatch = useDispatch();

  // State
  const [text, onText] = useState('');

  // Function
  const onSetRedux = () => {
    dispatch(exampleAction(text));
  };

  // Render
  return (
    <>
      <Head>
        <title>Welcome mamank</title>
      </Head>
      <input type="text" onChange={(e) => onText(e.target.value)} />
      <p>{text}</p>
      <button onClick={onSetRedux}>SAVE TO REDUX</button>
      <button onClick={() => alert(JSON.stringify(reduxExample))}>
        Show From Redux
      </button>
    </>
  );
};

export default App;
