import {AppProps} from 'next/app';

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
