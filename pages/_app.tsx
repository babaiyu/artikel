import {AppProps} from 'next/app';
import 'styles/globals.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'react-pro-sidebar/dist/css/styles.css';

// Redux config
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from 'storage/store';

const _app = ({Component, pageProps}: AppProps) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Component {...pageProps} />
    </PersistGate>
  </Provider>
);

export default _app;
