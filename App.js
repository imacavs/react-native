import React from 'react';
import {Provider} from 'react-redux';

import AppFeature from './src/feature';
import store from './src/redux/store';
// import FooterApp from './src/feature/opciones1/components/footer';
import FooterTabsIconTextExample from './src/feature/panelDeControl1/components/Footer';

const App = () => {
  return (
    <Provider store={store}>
      <AppFeature />
      {/* <FooterApp /> */}
      <FooterTabsIconTextExample />
    </Provider>
  );
};

export default App;
