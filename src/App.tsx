import React, { useEffect } from "react";
import { Layout } from "./components/Layout";
import { Provider, useStore } from "react-redux";
import { store } from "./state";

declare global {
    interface Window { ethereum: any; }
}

function App() {

  return (
    <Provider store={store}>      
        <Layout></Layout>
    </Provider>
  );
}

export default App;
