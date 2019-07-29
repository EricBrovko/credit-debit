import React from 'react';
import { Provider, observer } from 'mobx-react';

import loginStore from '../../stores/login';

import AppRouter from "./AppRouter";

import { ConfigProvider } from "../../context/config";

import './App.css';



const stores = {
  userStore: {

  },
  loginStore,
};

function AppView() {
  return (
    <Provider {...stores}>
      <ConfigProvider value={{a: 123}}>
        <div className="App">
          <AppRouter />
        </div>
      </ConfigProvider>
    </Provider>
  );
}

const App = observer(AppView);

export default App;
