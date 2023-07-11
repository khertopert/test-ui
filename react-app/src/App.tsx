import { useState } from "react";
import './App.css';
import { GlobalStore, Store } from "./main";
import FirstPage from "./pages/FirstPage";

export let storeSetter: (store: Store) => void;

function App() {
  const [storeState, setStoreState] = useState<Store>({ counter: 0 });
  console.log("app rendered");

  storeSetter = setStoreState;

  return <GlobalStore.Provider value={storeState}>
    <FirstPage></FirstPage>
  </GlobalStore.Provider>;
}

export default App;
