import React from 'react';
import Main from "./main";
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./config/Store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Main/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
