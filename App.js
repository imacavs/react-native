import React from 'react';
import {Provider} from 'react-redux';

import AppFeature from './src/feature';
import store from './src/redux/store';
// import FooterApp from './src/feature/opciones1/components/footer';

const App = () => {
  return (
    <Provider store={store}>
      <AppFeature />
      {/* <FooterApp /> */}
    </Provider>
  );
};

export default App;
